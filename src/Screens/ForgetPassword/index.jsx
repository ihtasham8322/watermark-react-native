import React from "react";
import { View, Text } from "react-native";
import Header from "../../Components/Header";
import tw from "../../lib/tailwind";
import InputField from "../../Components/InputField";
import PasswordInput from "../../Components/PasswordInput";
import MainButton from "../../Components/MainButton";
import { useNavigation } from "@react-navigation/native";
import GradientBorderButton from "../../Components/GradientBorderButton";

const ForgetPassword = () => {
  const navigation = useNavigation();
  const goto = () => {
    navigation.navigate("Otp");
  };

  const gotoLogin = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={tw`bg-white h-full`}>
      <Header text="Forgot Password?" back_enabled={false} />
      <Text
        style={[
          tw`ml-4 mt-1 text-subHeading-custom-color`,
          { fontFamily: "Outfit_500Medium" },
        ]}
      >
        Enter your registration email id or mobile no.
      </Text>

      <InputField
        placeholder=" Enter Your Email"
        type="text"
        style={tw`mx-6 mt-14`}
      />

      <Text
        style={[
          tw`text-center mb-4 text-xl `,
          { fontFamily: "Outfit_500Medium" },
        ]}
      >
        OR
      </Text>
      <View style={tw`mx-6`}>
        <PasswordInput placeholder="Enter Your Password" />
      </View>
      <MainButton text="Get OTP" style={tw`mx-6 mt-12`} onPress={goto} />
      <GradientBorderButton
        text="Go Back to Sign in page"
        style={tw`mx-6 mt-6`}
        onPress={gotoLogin}
      />
    </View>
  );
};

export default ForgetPassword;
