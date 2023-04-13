import React from "react";
import { View, Text, Pressable } from "react-native";
import Header from "../../Components/Header";
import Banner from "../PlansScreen/components/Banner/index";
import tw from "../../lib/tailwind";
import CurrentPlanBanner from "./components/CurrentPlanBanner";

import GradientButton from "./components/GradientButton";

const PlansScreen = () => {
  const dates = {
    date: "23/12/23",
  };
  return (
    <View style={tw`h-full bg-white`}>
      <Header text={"Plans"} />
      <View style={tw`px-8`}>
        <View>
          <Text style={tw`font-semibold text-xl mt-6`}>Plan expire on</Text>
        </View>
        <GradientButton style={tw`mt-2`} text={dates.date} />
        <Text style={tw`font-semibold text-xl mt-6`}>Current Plan</Text>
        <CurrentPlanBanner />
        <View>
          <Text style={tw`font-semibold text-xl mt-6`}>Plan upgrade to</Text>
        </View>
      </View>
      <Banner />
      <View style={tw`absolute bottom-10`}></View>
    </View>
  );
};

export default PlansScreen;
