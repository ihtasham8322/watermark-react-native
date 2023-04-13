import React from "react";
import { View } from "react-native";
import Header from "../../Components/Header";
import tw from "../../lib/tailwind";
import Banner from "./components";

const CaptionScreen = () => {
  return (
    <View style={tw`h-full bg-white`}>
      <Header text={"Captions"} />
      <Banner />
    </View>
  );
};

export default CaptionScreen;
