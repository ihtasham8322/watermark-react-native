import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import tw from "../../../lib/tailwind";
import { LinearGradient } from "expo-linear-gradient";

const ClickableBanner = ({ onPress, date, day, event_day, color, details }) => (
  <View>
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={color}
        style={tw`mt-6 rounded-4 w-[357px] h-[121px]`}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.5, y: 0.5 }}
      >
        <View style={tw`flex flex-col`}>
          <View style={tw`flex flex-row`}>
            <Text style={tw`m-4 text-white text-l `}>{date}</Text>
            <Text style={tw`m-4 text-white text-sm `}>{day}</Text>
            <Text style={tw`m-4 text-white text-l `}>{event_day}</Text>
          </View>
          <View>
            <Text style={tw`mx-4 text-white`}>{details}</Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  </View>
);

const banners = [
  {
    title: "1",
    color: ["#FF9E67", "#FF9E67"],
    date: "26th Jan 2023",
    day: "(Wednesday)",
    event_day: "Republic Day",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "2",
    color: ["#FFAE95", "#FF8A64"],
    date: "26th Jan 2023",
    day: "(Wednesday)",
    event_day: "Republic Day",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Banner = () => {
  const handleBannerPress = () => {
    // Add your desired action here
  };

  return (
    <View style={tw`bg-white items-center justify-center`}>
      {banners.map((banner) => (
        <ClickableBanner
          key={banner.title}
          onPress={handleBannerPress}
          title={banner.title}
          color={banner.color}
          date={banner.date}
          day={banner.day}
          event_day={banner.event_day}
          details={banner.details}
        />
      ))}
    </View>
  );
};

export default Banner;
