import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  ImageBackground,
  Pressable,
} from "react-native";
import tw from "../../lib/tailwind";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/core";
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";

import { setUpdatedUser } from "../../redux/actions/user";
import { selectUser } from "../../redux/reducer/user";

import Address from "../../Components/Address";
import Header from "../../Components/Header";
import InputField from "../../Components/InputField";
import MainButton from "../../Components/MainButton";
import { BACKEND_URL } from "/Users/dev/Projects/project/watermark-master/src/config/index.jsx";
const validateForm = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.mobile) {
    errors.mobile = "Required";
  } else if (values.mobile.length < 10 || values.mobile.length > 10) {
    errors.mobile = "Invalid mobile number";
  }

  return errors;
};

const initialValues = {
  website: "",
  phone: "",
  email: "",
  address: {
    line1: "",
    line2: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  },
};

const MainBrandDetails = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { user } = useSelector(selectUser);
  // console.log("dwewe", user.brandDetails);
  const [image, setImage] = useState(null);
  useEffect(() => {
    if (user?.brandDetails && user?.brandDetails?.logo)
      setImage(`${BACKEND_URL}/uploads/${user?.brandDetails?.logo.split('.')[0] + '_brand-logo' + '.' + user?.brandDetails?.logo.split('.')[1]}`);
  }, [user]);


  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const PickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };


  // const handleFormSubmit = async (brandDetails) => {

  //   if (!image) {
  //     dispatch(setUpdatedUser({ brandDetails }));
  //   } else {
  //     const formData = new FormData();
  //     formData.append("file", {
  //       uri: image,
  //       type: "image/jpeg",
  //       name: `${user._id}.jpg`,
  //     });

  //     brandDetails.logo = `${user._id}.jpg`;
  //     console.log("rferger", brandDetails)
  //     formData.append("data", JSON.stringify({ brandDetails }));
  //     dispatch(setUpdatedUser(formData, true));
  //   }
  //   navigation.goBack();
  // };

  const handleFormSubmit = (brandDetails) => {
    const body = new FormData();
    // console.log("Adding");
    body.append("file", {
      name: `${user._id}_brand-logo.jpg`,
      type: "image",
      uri: Platform.OS === "android" ? image : image.replace("file://", ""),
    });
    // console.log("brandDetails.website", brandDetails)
    // Create a copy of the brandDetails object
    const brandDetailsCopy = Object.assign({}, brandDetails);

    // Set the logo property on the copy of the object
    brandDetailsCopy.logo = `${user._id}.jpg`;
    // console.log("brandDetails", brandDetails)
    body.append("data", JSON.stringify({ brandDetails: brandDetailsCopy }));
    dispatch(setUpdatedUser(body, true));

  };



  return (
    <View style={tw`bg-white h-full`}>
      <Header text="Brand Details" back_enabled={false} />
      <Formik
        // validate={validateForm}
        initialValues={user?.brandDetails ? user?.brandDetails : initialValues}
        onSubmit={handleFormSubmit}
      >

        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            <View style={tw`mt-6 flex flex-row mx-6`}>
              <View>

                <Pressable
                  onPress={PickImage}
                  style={tw`rounded-2xl h-28 w-28 mt-1 bg-[#F0F0F0] `}
                >
                  {console.log(image)}
                  <ImageBackground
                    style={tw`h-28 w-28`}
                    imageStyle={tw`rounded-2xl`}
                    source={
                      image
                        ? { uri: image }
                        : "https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"
                    }
                    resizeMode="contain"
                  >

                    <Feather
                      name="edit-3"
                      size={20}
                      color="black"
                      style={tw`absolute bottom-2 right-3 bg-white rounded-full p-1 `}
                    />
                  </ImageBackground>

                </Pressable>
              </View>
              <View style={tw`ml-4  w-[63.5%]`}>
                <InputField
                  placeholder="Phone Number"
                  type="number"
                  handleBlur={handleBlur("phone")}
                  onChangeText={handleChange("phone")}
                  value={values.phone}
                />
                <InputField
                  placeholder="E-mail"
                  handleBlur={handleBlur("email")}
                  onChangeText={handleChange("email")}
                  value={values.email}
                />
              </View>
            </View>
            <View style={tw`mx-6`}>
              <InputField
                placeholder="www.xyxweb.com"
                handleBlur={handleBlur("website")}
                onChangeText={handleChange("website")}
                value={values.website}
              />

              <Text style={tw`text-[17px] font-semibold py-4`}>Address</Text>
            </View>
            <Address
              handleBlur={handleBlur}
              handleChange={handleChange}
              values={values}
            />
            <View style={tw`mx-6 mt-6`}>
              <MainButton text="Save" onPress={handleSubmit} />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default MainBrandDetails;
