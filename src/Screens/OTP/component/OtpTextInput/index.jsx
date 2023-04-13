import { View, TextInput as Input } from "react-native";
import React from "react";
import tw from "../../../../lib/tailwind";
import Gradient from "../../../../Components/Gradient";

const stylesheet = tw`flex flex-row items-center p-4 w-14  h-14 rounded-4 flex-none flex-grow-0 m-[0.5px] bg-white text-[24px] justify-center`;

const OtpTextInput = ({ placeholder, secureTextEntry = false, style }) => {
  return (
    <View style={tw`ml-4`}>
      <View style={{ ...style, ...tw`relative` }}>
        <Gradient></Gradient>
        <Input
          style={{ ...stylesheet }}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          maxLength={1}
          type="number"
        />
      </View>
    </View>
  );
};

export default OtpTextInput;
