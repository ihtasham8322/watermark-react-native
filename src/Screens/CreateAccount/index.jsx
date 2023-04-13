import React, { useState } from "react";
import tw from "../../lib/tailwind";

import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Pressable,
  ToastAndroid,
} from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { Formik } from "formik";

import Header from "../../Components/Header";
import InputField from "../../Components/InputField";
import PasswordInput from "../../Components/PasswordInput";
import MainButton from "../../Components/MainButton";
import { useDispatch } from "react-redux";
import { Register } from "../../redux/actions/auth";

const CreateAccountScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const gotoLogin = () => {
    navigation.navigate("Login");
  };
  const [checked, setChecked] = useState(false);

  const handleCheckboxPress = () => {
    setChecked(!checked);
  };

  const handleFormSubmit = (newUser) => {

    dispatch(Register(newUser));
    ToastAndroid.show(
      "Account Created. Please Login to continue!",
      ToastAndroid.SHORT
    );
    navigation.navigate("Login");
  };

  const gotoBillingAddress = () => {
    navigation.navigate("BillingAddress");
  };

  return (
    <ScrollView style={tw`bg-white h-full`}>
      <Header text="Create an account" />
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          password: "",
          confirmPassword: "",
          termsAndConditions: false,
        }}
        onSubmit={handleFormSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <View>
              <View>
                <View style={tw`mx-6 mt-10`}>
                  <InputField
                    placeholder="Enter your First Name"
                    type="text"
                    onChangeText={handleChange("firstName")}
                    onBlur={handleBlur("firstName")}
                    value={values.firstName}
                  />
                  <InputField
                    placeholder="Enter your Last Name"
                    type="text"
                    onChangeText={handleChange("lastName")}
                    onBlur={handleBlur("lastName")}
                    value={values.lastName}
                  />
                  <InputField
                    placeholder=" Enter Your Email"
                    type="text"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                  />
                  <InputField
                    placeholder="Enter Mobile Number"
                    type="number"
                    onChangeText={handleChange("phoneNumber")}
                    onBlur={handleBlur("phoneNumber")}
                    value={values.phoneNumber}
                  />

                  <PasswordInput
                    placeholder="Enter Your Password"
                    type="password"
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                  />
                  <View style={tw`mx-2 mt-4 flex flex-row justify-between `}>
                    <View>
                      <Text
                        style={[
                          tw`text-gray-500 text-[10px]`,
                          { fontFamily: "Outfit_500Medium" },
                        ]}
                      >
                        Must have at least 6{" "}
                      </Text>
                      <Text
                        style={[
                          tw`text-gray-500 text-[10px]`,
                          { fontFamily: "Outfit_500Medium" },
                        ]}
                      >
                        characters
                      </Text>
                    </View>
                    <View>
                      <View style={tw`flex flex-row `}>
                        <AntDesign
                          name="check"
                          size={14}
                          style={tw`text-gray-500 `}
                        />
                        <Text
                          style={[
                            tw`text-gray-500 ml-1 text-[10px]`,
                            { fontFamily: "Outfit_500Medium" },
                          ]}
                        >
                          A symbol (@,#,$)
                        </Text>
                      </View>
                      <View style={tw`flex flex-row`}>
                        <FontAwesome
                          name="circle"
                          size={10}
                          style={tw`text-gray-500 mt-[1px]`}
                        />
                        <Text
                          style={[
                            tw`text-gray-500 ml-2 text-[10px]`,
                            { fontFamily: "Outfit_500Medium" },
                          ]}
                        >
                          Upper & lower case letter
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={tw`mt-4 mb-4`}>
                    <PasswordInput
                      placeholder="Confirm Your Password"
                      type="password"
                      onChangeText={handleChange("confirmPassword")}
                      onBlur={handleBlur("confirmPassword")}
                      value={values.confirmPassword}
                    />
                  </View>
                </View>

                <View style={tw`mx-6 flex flex-row items-center `}>
                  <TouchableOpacity onPress={handleCheckboxPress}>
                    <MaterialCommunityIcons
                      name={
                        checked ? "checkbox-blank-outline" : "checkbox-outline"
                      }
                      size={20}
                      style={tw`text-gray-500`}
                    />
                  </TouchableOpacity>
                  <Text
                    style={[
                      tw`ml-2 text-gray-500 `,
                      { fontFamily: "Outfit_500Medium" },
                    ]}
                  >
                    I agree to all terms & condition
                  </Text>
                </View>
              </View>
            </View>
            <View style={tw`mx-6 mt-6`}>
              <MainButton
                style={tw`my-2`}
                text={"Next"}
                onPress={handleSubmit}
              />

              <Pressable
                style={tw`mt-3 flex flex-row justify-center `}
                onPress={gotoLogin}
              >
                <Text
                  style={[
                    tw`text-[13px] font-light text-gray-400`,
                    { fontFamily: "Outfit_500Medium" },
                  ]}
                >
                  Already have an account?{" "}
                  <Text
                    style={[
                      tw`text-[#F534F9] font-semibold`,
                      { fontFamily: "Outfit_500Medium" },
                    ]}
                  >
                    Sign In
                  </Text>
                </Text>
              </Pressable>
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

export default CreateAccountScreen;
