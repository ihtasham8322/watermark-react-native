import React from "react";
import { View, Text } from "react-native";
import tw from "../../lib/tailwind";
import { useNavigation } from "@react-navigation/core";

import Header from "../../Components/Header";
import ClickableBanner from "./components/ClickableBanner";

import { banners } from "../../constants/";

import { useSelector } from "react-redux";
import { selectUser } from "../../redux/reducer/user";

const GetStartedScreen = () => {
  const navigation = useNavigation();
  const { user } = useSelector(selectUser);

  const handleBannerPress = (goto) => {
    navigation.navigate(goto);
  };

  return (
    <View style={tw`h-full bg-white`}>
      <Header text={"Get Started"} back_enabled={false} />
      <View style={tw`px-4`}>
        {banners.map((banner) => (
          <ClickableBanner
            key={banner.key}
            contentKey={banner.key}
            onPress={() => handleBannerPress(banner.goto)}
            color={banner.color}
            title={banner.title}
            user={user}
          />
        ))}
      </View>
    </View>
  );
};

export default GetStartedScreen;
