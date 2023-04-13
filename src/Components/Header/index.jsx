import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import tw from "../../lib/tailwind";

const Header = ({ text, back_enabled = true }) => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={tw`flex flex-row items-center mt-3 ml-2 `}>
      {back_enabled && (
        <TouchableOpacity onPress={goBack}>
          <Ionicons name="chevron-back" size={28} color="black" />
        </TouchableOpacity>
      )}
      <Text
        style={[
          tw`text-[20px] font-semibold ml-2`,
          { fontFamily: "Outfit_500Medium" },
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

export default Header;
