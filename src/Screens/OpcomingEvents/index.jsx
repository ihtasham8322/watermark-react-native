import React from "react";
import { View, Text, Pressable } from "react-native";
import Header from "../../Components/Header";
import tw from "../../lib/tailwind";
import Banner from "./components";

const UpcomingEventScreen = () => {
  return (
    <View style={tw`h-full bg-white`}>
      <Header text={"Upcoming Event"} />
      <Banner />
    </View>
  );
};

export default UpcomingEventScreen;
