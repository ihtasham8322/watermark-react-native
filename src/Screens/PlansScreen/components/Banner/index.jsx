import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import tw from "../../../../lib/tailwind";
import { LinearGradient } from "expo-linear-gradient";

const ClickableBanner = ({
  onPress,
  title,
  color,
  price,
  bulletPoint1,
  bulletPoint2,
}) => (
  <View>
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={color}
        style={tw`mt-6 rounded-4 w-[357px] h-[121px]`}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.5, y: 0.5 }}
      >
        <View style={tw``}>
          <View style={tw`m-4 flex flex-row justify-between w-[315px]`}>
            <Text style={tw`font-bold text-slate-700 text-xl `}>{title}</Text>
            <Text style={tw`font-bold text-slate-700 my-2`}>${price}</Text>
          </View>
          <View style={tw`flex flex-row`}>
            <View style={tw`mx-4`}>
              <Text style={tw`font-bold text-slate-700`}>•</Text>
            </View>
            <Text style={tw`font-bold text-slate-700`}>{bulletPoint1}</Text>
          </View>
        </View>
        <View style={tw`flex flex-row`}>
          <View style={tw`mx-4 `}>
            <Text style={tw`font-bold text-slate-700`}>•</Text>
          </View>
          <Text style={tw`font-bold text-slate-700`}>{bulletPoint2}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  </View>
);

const banners = [
  {
    title: "Gold",
    color: ["#D7A700", "#F9E681"],
    price: 250,
    bulletPoint1: "Lorem ipsum dolor sit amet",
    bulletPoint2: "Lorem ipsum dolor sit amet",
  },
  {
    title: "Platinum",
    color: ["#B4BBFF75", "#DDDDDF"],
    price: 250,
    bulletPoint1: "Lorem ipsum dolor sit amet",
    bulletPoint2: "Lorem ipsum dolor sit amet",
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
          price={banner.price}
          bulletPoint1={banner.bulletPoint1}
          bulletPoint2={banner.bulletPoint2}
        />
      ))}
    </View>
  );
};

export default Banner;
