import { View, TextInput as Input } from "react-native";
import React from "react";
import tw from "../../lib/tailwind";
import Gradient from "../Gradient";

const stylesheet = tw`flex flex-row items-center p-4 w-[99.4%] rounded-4 flex-none flex-grow-0 m-[1px] bg-white`;

const TextInput = (props) => {
  return (
    <View style={{ ...props.style, ...tw`relative` }}>
      <Gradient />
      <Input
        style={[
          { ...(props.style2 && props.style2), ...stylesheet },
          { fontFamily: "Outfit_500Medium" },
        ]}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry ? true : false}
        onChangeText={props.onChangeText}
        onBlur={props.onBlur}
        value={props.value}
      />
    </View>
  );
};

export default TextInput;
