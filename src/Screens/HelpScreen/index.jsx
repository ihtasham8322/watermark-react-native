import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Header from "../../Components/Header";
import tw from "../../lib/tailwind";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const PlansScreen = () => {
  const onPress = () => {
    // Perform some action on press
  };
  return (
    <View style={tw`h-full bg-white`}>
      <Header text={"Help"} />
      <View style={tw`flex flex-col`}>
        <TouchableOpacity
          onPress={onPress}
          style={tw`flex flex-row mx-6 mt-10`}
        >
          <Feather name="phone-call" size={24} color="#5060E9" />
          <Text style={tw`font-semibold text-xl ml-4`}>Call us</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPress} style={tw`flex flex-row mx-6 mt-6`}>
          <FontAwesome name="whatsapp" size={24} color="green" />
          <Text style={tw`font-semibold text-xl ml-4`}>
            Send a query on whatsapp
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPress} style={tw`flex flex-row mx-6 mt-6`}>
          <MaterialCommunityIcons
            name="email-fast-outline"
            size={24}
            color="#FF6060"
          />
          <Text style={tw`font-semibold text-xl ml-4`}>Email</Text>
        </TouchableOpacity>
        <View>
          <Text style={tw`font-bold mt-10 text-xl ml-4`}>Contact Us</Text>
          <Text style={tw`mt-2 mx-4 text-sm`}>
            Lorem ipsum dolor sit amet, {"\n"}consectetur adipiscing elit.
          </Text>
          <Text style={tw` font-semibold mt-2 mx-4 text-sm`}>
            +91 987456321
          </Text>
          <Text style={tw` font-semibold mt-2 mx-4 text-sm`}>
            test1234@gmail.com
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PlansScreen;
