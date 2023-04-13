import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import tw from "../lib/tailwind";

import { useDispatch } from "react-redux";

import useIcons from "../hooks/useIcons";
import MainButton from "../Components/MainButton";
import { Logout } from "../redux/actions/auth";

const links = [
  {
    name: "Profile",
    screen: "Profile",
    icon: {
      lib: "FontAwesome",
      name: "user",
    },
  },
  {
    name: "Plans",
    screen: "Plans",
    icon: {
      lib: "Feather",
      name: "edit",
    },
  },
  {
    name: "Billing Detail",
    screen: "MainBillingDetails",
    icon: {
      lib: "AntDesign",
      name: "filetext1",
    },
  },
  {
    name: "Social",
    screen: "socials",
    icon: {
      lib: "Ionicons",
      name: "people-circle-outline",
    },
  },
  {
    name: "Help",
    screen: "Help",
    icon: {
      lib: "Entypo",
      name: "help-with-circle",
    },
  },
];

const Item = ({ item }) => {
  const navigation = useNavigation();

  const icon = useIcons({
    lib: item.icon?.lib,
    name: item.icon?.name,
    color: item.icon?.color || "#0B0B0B",
    size: 24,
  });
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(item.screen)}
      style={tw`flex flex-row items-center px-4 py-4`}
    >
      <View style={tw``}>{icon}</View>
      <Text
        style={[
          tw`text-[#0B0B0B] font-semibold ml-[28px] text-[16px]`,
          { fontFamily: "Outfit_500Medium" },
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

const Drawer = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(Logout());
  };
  return (
    <View style={tw`flex-1 bg-white px-6`}>
      <View style={tw`flex items-center justify-center my-10`}>
        <View style={tw`h-[200px] w-[200px] bg-gray-300 rounded-full`}></View>
      </View>
      <View>
        <FlatList
          data={links}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.name}
        />
        <MainButton
          text="Logout"
          style={tw`mx-4 my-4 mt-8`}
          onPress={handleLogout}
        />
      </View>
    </View>
  );
};

export default Drawer;
