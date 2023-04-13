import { View, Text, TouchableHighlight } from "react-native";
import React from "react";
import tw from "../../../../lib/tailwind";
import Gradient from "../Gradient";

const GradientButton = ({ text, style, onPress, style2, showGradient=true }) => {
  return (
    <TouchableHighlight
      style={{ ...style, ...tw`rounded-8` }}
      onPress={onPress}
    >
      <View>
        {showGradient && <Gradient style={tw`py-3`} />}
        <View style={tw`flex text-center items-center justify-center py-3`}>
          <Text
            style={[
              { ...style2, ...tw`text-white font-semibold text-[16px]` },
              { fontFamily: "Outfit_500Medium" },
            ]}
          >
            {text}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default GradientButton;
