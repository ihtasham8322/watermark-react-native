import React from "react";
import { View } from "react-native";
import Header from "../../Components/Header";
import tw from "../../lib/tailwind";
import Banner from "./components";

const PostScreen = () => {
  return (
    <View style={tw`h-full bg-white`}>
      <Header text={"Post"} />
      <Banner />
    </View>
  );
};
export default PostScreen;
