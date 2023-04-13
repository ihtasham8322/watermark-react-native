import React from "react";
import { View, Text } from "react-native";
import tw from "../../../../lib/tailwind";

const Cards = ({ style,heading,subHeading }) => {
  return (
    <View style={{ ...style, ...tw`mx-6  h-24 rounded-2xl p-4` }}>
      <Text style={tw`text-[20px] font-semibold`}>{heading}</Text>
      <Text style={tw`text-[#343434] mt-2 `}>{subHeading}</Text>
    </View>
  );
};

export default Cards;
