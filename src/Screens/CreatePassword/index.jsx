import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import MainButton from "../../Components/MainButton";
import tw from "../../lib/tailwind";
import { useNavigation } from "@react-navigation/core";

const CustomButton = ({ onPress, text }) => (
  <TouchableOpacity
    style={tw`bg-white rounded-4 w-[325px] h-[56px] border border-gray-300`}
    onPress={onPress}
  >
    <Text
      style={tw`font-bold text-black items-center justify-center py-4 text-center `}
    >
      {text}
    </Text>
  </TouchableOpacity>
);

const CreatePasswordScreen = () => {
  const navigation = useNavigation();
  const gotoLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={tw`flex flex-1 bg-white items-center justify-center`}>
      <View style={tw`flex flex-col items-center justify-center text-center`}>
        <Text style={tw`font-semibold text-[20px] mb-2`}>
          Create New Password
        </Text>
        <Text
          style={tw`text-[14px] text-slate-400 font-light justify-center text-center pb-6`}
        >
          Your new password must be different from {"\n"}
          previous used passwords
        </Text>
      </View>
      <View style={tw`py-[20px]`}>
        <MainButton text="Reset Password" style={tw`w-[325px] h-[56px]`} />
      </View>
      <View style={tw``}>
        <CustomButton text="Sign Up" onPress={gotoLogin} />
      </View>
    </View>
  );
};

export default CreatePasswordScreen;
