import React from "react";
import { FlatList, Text, TouchableOpacity, View, Image } from "react-native";
import tw from "../../../lib/tailwind";
import { SwipeListView } from "react-native-swipe-list-view";
import { useNavigation } from "@react-navigation/core";

const ClickableBanner = ({ details }) => {
  return (
    <View style={tw`flex flex-row`}>
      <View style={tw`bg-[#F3F3F3] w-[354px] h-[105px] rounded-lg p-4 mt-10`}>
        <Text style={tw`text-black text-sm mt-2 text-center`}>{details}</Text>
      </View>
    </View>
  );
};

const banners = [
  {
    id: 1,
    title: "Banner 1",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    title: "Banner 2",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "Banner 3",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    title: "Banner 4",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Banner = () => {
  const navigation = useNavigation();
  const handleBannerPress = () => {
    navigation.navigate("PreviewScreen");
  };

  return (
    <View style={tw`bg-white items-center justify-center`}>
      <SwipeListView
        data={banners}
        disableRightSwipe
        renderItem={({ item }) => <ClickableBanner {...item} />}
        renderHiddenItem={(data, rowMap) => (
          <View
            style={tw`flex flex-row-reverse mt-10 items-center h-[105px] bg-[#D8D8D8] rounded-lg `}
          >
            <TouchableOpacity
              onPress={handleBannerPress}
            >
              <Image
                source={require("../../../../assets/arrow.png")}
                style={tw`mt-2 h-[18px] w-[28px] my-4 mx-14 items-center`}
              />
              <Text
                style={tw`flex flex-col-reverse font-bold text-lg mx-12 items-center`}
              >
                Select
              </Text>
            </TouchableOpacity>
          </View>
        )}
        leftOpenValue={75}
        rightOpenValue={-150}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Banner;
