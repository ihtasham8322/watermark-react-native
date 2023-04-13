import React from "react";
import { View } from "react-native";
import Header from "../../Components/Header";
import SocialMedia from "./component/SocialMedia";
import tw from "../../lib/tailwind";

const icons = [
  "facebook-square",
  "instagram",
  "twitter",
  "linkedin-square",
  "google",
];

const Socials = () => {
  return (
    <View style={tw`bg-white h-full`}>
      <Header text="Social" />
      {icons.map((icon, index) => (
        <SocialMedia key={index} icon={icon} />
      ))}
    </View>
  );
};

export default Socials;
