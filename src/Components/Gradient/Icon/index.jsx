import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

import {
  Entypo,
  MaterialIcons,
  AntDesign,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";
import { View } from "react-native";
import tw from "../../../lib/tailwind";

const GetIcon = ({ lib, name, size, color }) => {
  switch (lib) {
    case "MaterialIcons":
      return <MaterialIcons name={name} size={size} color={color} />;
    case "Entypo":
      return <Entypo name={name} size={size} color={color} />;
    case "AntDesign":
      return <AntDesign name={name} size={size} color={color} />;
    case "Ionicons":
      return <Ionicons name={name} size={size} color={color} />;
    case "FontAwesome":
      return <FontAwesome name={name} size={size} color={color} />;
    default:
      return <MaterialIcons name={name} size={size} color={color} />;
  }
};

const GradientIcon = ({ size, focused, lib, name }) => {
  return (
    <View style={tw`py-4 h-[60px]`}>
      <MaskedView
        style={{ flex: 1, flexDirection: "row", height: size }}
        maskElement={
          <GetIcon lib={lib} name={name} size={26} color="#DCDCDC" />
        }
      >
        <LinearGradient
          colors={["#BF00FF", "#9049FF"]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        >
          <GetIcon
            lib={lib}
            name={name}
            size={26}
            color={focused ? "transparent" : "#DCDCDC"}
          />
        </LinearGradient>
      </MaskedView>
    </View>
  );
};

export default GradientIcon;
