import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";

import tw from "../../lib/tailwind";

import Gradient from "../Gradient";
import { AntDesign } from "@expo/vector-icons";

const stylesheet = tw`flex flex-row items-center p-4 w-80 rounded-4 flex-none flex-grow-0 bg-white`;

const PasswordInput = ({
  placeholder,
  onChangeText,
  onBlur,
  value,
  style,
  style2,
}) => {
  const [showGradient, setShowGradient] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  
  return (
    <View
      style={{ ...style, ...tw`relative` }}
      onTouchEnd={() => setShowGradient(true)}
      onBlur={() => setShowGradient(false)}
    >
      {showGradient && <Gradient />}

      <View
        style={tw`flex flex-row items-center justify-between m-[1px] w-[99.4%] bg-white rounded-4 pr-4 ${
          !showGradient ? "border" : "border-0"
        } border-gray-300`}
      >
        <TextInput
          placeholder={placeholder}
          secureTextEntry={!isPasswordVisible}
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
          style={[
            { ...(style2 && style2), ...stylesheet },
            { fontFamily: "Outfit_500Medium" },
          ]}
        />
        <Pressable
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          style={tw`-ml-10`}
        >
          <AntDesign
            name="eyeo"
            size={24}
            color={isPasswordVisible ? "#DC07FF" : "gray"}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default PasswordInput;
