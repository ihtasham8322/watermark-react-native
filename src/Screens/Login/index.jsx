import { View, Text, Pressable, Alert } from "react-native";
import { useRef, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { Formik } from "formik";

import { useDispatch } from "react-redux";
import { Login } from "../../redux/actions/auth";

import tw from "../../lib/tailwind";

import TextInput from "../../Components/TextInput";
import MainButton from "../../Components/MainButton";
import InputField from "../../Components/InputField";

const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLogin = async ({ email, password }) => {
    try {
      dispatch(Login({ email, password }));
    } catch (err) {
      switch (!err?.status) {
        case 400:
          console.log("400 ERROR");
        case 401:
          console.log("UNAUTHORIZED");
        default:
          console.log(err);
          Alert.alert("Error", err.data?.message);
      }
    }
  };

  const handleForgotPassword = () => {
    navigation.navigate("ForgetPassword");
  };
  const handleSignup = () => {
    navigation.navigate("CreateAccount");
  };
  return (
    <View style={tw`flex flex-1 bg-white items-center justify-center`}>
      <View style={tw`flex flex-col items-center justify-center text-center`}>
        <Text
          style={[
            tw`font-semibold text-[24px] mb-2`,
            { fontFamily: "Outfit_500Medium" },
          ]}
        >
          Welcome Back
        </Text>
        <Text
          style={[
            tw`text-[18px] font-light mb-10 text-gray-400`,
            { fontFamily: "Outfit_500Medium" },
          ]}
        >
          Enter your details below
        </Text>
      </View>
      <View style={tw`px-6 w-full`}>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleLogin}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={tw`my-6 w-full  flex flex-col`}>
              <InputField
                style={tw`my-2`}
                placeholder="Enter your Email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              <InputField
                style={tw`my-2`}
                placeholder="Enter your Password"
                secureTextEntry={true}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
              <View style={tw`flex flex-row-reverse mb-4`}>
                <Pressable onPress={handleForgotPassword}>
                  <Text
                    style={[
                      tw`text-[13px] font-semibold text-[#FF0000]`,
                      { fontFamily: "Outfit_500Medium" },
                    ]}
                  >
                    Forgot Password?
                  </Text>
                </Pressable>
              </View>
              <MainButton
                // disabled={isLoading}
                style={tw`my-2 mt-9`}
                text={"Login"}
                onPress={handleSubmit}
              />
            </View>
          )}
        </Formik>
      </View>
      <Pressable style={tw`absolute bottom-10`} onPress={handleSignup}>
        <Text
          style={[
            tw`text-[13px] font-light text-gray-400`,
            { fontFamily: "Outfit_500Medium" },
          ]}
        >
          Don't have an account?{" "}
          <Text
            style={[
              tw`text-[#F534F9] font-semibold`,
              { fontFamily: "Outfit_500Medium" },
            ]}
          >
            Sign Up
          </Text>
        </Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;
