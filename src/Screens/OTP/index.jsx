import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "../../lib/tailwind.js";
import MainButton from "../../Components/MainButton";
import OtpTextInput from "./component/OtpTextInput/index.jsx";
import Header from "../../Components/Header/index.jsx";
import { useNavigation } from "@react-navigation/native";

const OTP = () => {
  const navigation = useNavigation();
  const gotoCreateNewPassword = () => {
    navigation.navigate("CreatePassword");
  };

  const phoneNumber = "+91 9992228899";
  return (
    <View style={tw`bg-white h-full`}>
      <Header />
      <View style={tw`flex flex-1 items-center justify-center `}>
        <Text style={tw`text-[20px] font-semibold`}>Enter OTP</Text>
        <Text style={tw`text-[14px]`}>OTP is sent to {phoneNumber}</Text>
        <View style={tw`flex flex-row  mt-5`}>
          <OtpTextInput key={index} />
          <OtpTextInput key={index} />
          <OtpTextInput key={index} />
          <OtpTextInput key={index} />
        </View>
        <View style={tw`flex flex-row mt-3`}>
          <Text>Don’t receive code ?</Text>
          <TouchableOpacity>
            <Text style={tw`font-semibold`}> Resend</Text>
          </TouchableOpacity>
        </View>
        <MainButton
          text="Verify & Continue"
          style={tw`mt-12`}
          style2={tw`px-30`}
          onPress={gotoCreateNewPassword}
        />
      </View>
    </View>
  );
};

export default OTP;
