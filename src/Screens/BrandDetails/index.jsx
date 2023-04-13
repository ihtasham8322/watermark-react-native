import React, { useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";
import tw from "../../lib/tailwind";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { setUpdatedUser } from "../../redux/actions/user";
import { selectUser } from "../../redux/reducer/user";

import InputField from "../../Components/InputField";
import Address from "../../Components/Address";
import MainButton from "../../Components/MainButton";
import Header from "../../Components/Header";
import UploadImage from "../../Components/UploadImage";

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

const BrandDetails = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {
    user: { brandDetails, _id },
  } = useSelector(selectUser);

  const [image, setImage] = React.useState(null);

  useEffect(() => {
    if (brandDetails && brandDetails.logo)
      setImage(`http://192.168.1.6:3050/brandLogo/${brandDetails?.logo}`);
  }, [brandDetails]);

  const gotoMainBrandDetails = () => {
    navigation.navigate("BtmBrandDetails");
  };

  const handleFormSubmit = async (brandDetails) => {
    if (!image) {
      dispatch(setUpdatedUser({ brandDetails }));
    } else {
      const formData = new FormData();
      formData.append("file", {
        uri: image,
        type: "image/jpeg",
        name: `${_id}.jpg`,
      });
      // console.log("brandDetails.website", brandDetails.website)
      brandDetails.logo = `${_id}.jpg`;
      formData.append("data", JSON.stringify({ brandDetails }));
      dispatch(setUpdatedUser(formData, true));
    }
    navigation.goBack();
  };

  return (
    <ScrollView style={tw`bg-white h-full`}>
      <View style={tw`relative`}>
        <Header text="Brand Details" />
        <Text
          style={[tw`ml-11 text-gray-400`, { fontFamily: "Outfit_500Medium" }]}
        >
          Complete your brand details
        </Text>
        <View style={tw`mx-6 mt-8`}>
          <UploadImage
            style={tw`h-24`}
            text="Upload Logo"
            image={image}
            setImage={setImage}
          />
        </View>
        <Formik
          initialValues={brandDetails ? brandDetails : initialValues}
          // validate={validateForm}
          onSubmit={handleFormSubmit}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <>
              <View style={tw`mb-18`}>
                <View style={tw`mx-6 mt-6`}>
                  <InputField
                    placeholder="Enter Your Website "
                    type="text"
                    style={tw``}
                    onChangeText={handleChange("website")}
                    onBlur={handleBlur("website")}
                    value={values.website}
                  />
                  <View style={tw`flex flex-row items-center `}>
                    <InputField
                      placeholder="Enter Mobile No."
                      type="number"
                      style={tw`w-[85%] `}
                      onChangeText={handleChange("phone")}
                      onBlur={handleBlur("phone")}
                      value={values.phone}
                    />
                    <TouchableOpacity>
                      <AntDesign
                        name="plus"
                        size={20}
                        style={tw`border text-gray-300   border-gray-300 ml-2 p-4 mb-4 rounded-xl`}
                      />
                    </TouchableOpacity>
                  </View>
                  <InputField
                    placeholder="Enter Your email "
                    type="text"
                    style={tw``}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                  />
                </View>
                <View style={tw`mt-1`}>
                  <Text
                    style={[
                      tw`mx-6 mb-2 text-[24px] font-semibold`,
                      { fontFamily: "Outfit_500Medium" },
                    ]}
                  >
                    Enter Address
                  </Text>
                  <Address
                    values={values}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />
                </View>
              </View>
              <View
                style={tw`flex flex-row justify-between items-center bg-white absolute bottom-0 w-full h-20 px-6`}
              >
                <MainButton
                  text="Save"
                  style={tw`w-full`}
                  onPress={handleSubmit}
                />
              </View>
            </>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default BrandDetails;
