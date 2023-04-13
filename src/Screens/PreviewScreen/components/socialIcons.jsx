import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { View, Pressable } from "react-native";
import tw from "../../../lib/tailwind";

const availablePlatforms = [
  { icon: "facebook-square", name: "FACEBOOK" },
  { icon: "instagram", name: "INSTAGRAM" },
  { icon: "twitter", name: "TWITTER" },
  { icon: "linkedin-square", name: "LINKEDIN" },
];

const Social = ({ platforms, onPress }) => {
  return (
    <View
      style={tw`flex flex-row items-center py-4 bg-[#F2F2F2] mx-4 rounded-lg justify-around`}
    >
      {availablePlatforms.map((platform, index) => (
        <Pressable key={index} onPress={() => onPress(platform.name)}>
          <AntDesign
            name={platform.icon}
            size={24}
            color={platforms.includes(platform.name) ? "#4141DB" : "black"}
            style={tw`h-[25px] w-[25px]`}
          />
        </Pressable>
      ))}
    </View>
  );
};

export default Social;
