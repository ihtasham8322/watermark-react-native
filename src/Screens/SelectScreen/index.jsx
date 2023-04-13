import React from "react";
import { View } from "react-native";
import Header from "../../Components/Header";
import tw from "../../lib/tailwind";

const SelectScreen = () => {
  return (
    <View style={tw`h-full bg-white`}>
      <Header text={"Select"} />
    </View>
  );
};

export default SelectScreen;
