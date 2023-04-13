import React from "react";
import { View, Text, Pressable } from "react-native";
import Header from "../../Components/Header";
import Banner from "../PackageScreen/components/index";
import tw from "../../lib/tailwind";

import MainButton from "../../Components/MainButton";
import { useNavigation } from "@react-navigation/core";

const PackageScreen = () => {
  const navigation = useNavigation();
  const gotoLogin = () => {
    navigation.navigate("Login");
  };
  const gotoHomeScreen = () => {
    navigation.navigate("GetStartedScreen");
  };

  return (
    <View style={tw`h-full bg-white`}>
      <Header text={"Select a Package"} />
      <Banner />
      <View style={tw`absolute bottom-10`}>
        <View style={tw`px-12`}>
          <MainButton text="Done" style={tw`w-[325px] h-[56px]`} onPress={gotoHomeScreen} />
        </View>
        <Pressable style={tw`pt-4 `} onPress={gotoLogin}>
          <Text style={tw`text-[13px] font-light text-center`}>
            Already have an account?{" "}
            <Text style={tw`text-[#F534F9] font-semibold`}>Sign Up</Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default PackageScreen;
