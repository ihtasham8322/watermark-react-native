import React from "react";
import { View, Text, TextInput } from "react-native";
import tw from "../../lib/tailwind";
import Gradient from "../Gradient";

const InputField = ({
  placeholder,
  type,
  style,
  onChangeText,
  onBlur,
  value,
}) => {
  const [showGradient, setShowGradient] = React.useState(false);
  return (
    <View
      style={{
        ...style,
        ...tw`relative mb-4`,
      }}
      onTouchEnd={() => setShowGradient(true)}
      onBlur={() => setShowGradient(false)}
    >
      {showGradient && <Gradient />}
      <TextInput
        placeholder={placeholder}
        type={type}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        style={[
          tw`flex flex-row items-center ${!showGradient ? "border" : "border-0"
            } border-gray-300 p-4 w-[99.4%] rounded-4 flex-none flex-grow-0 m-[1px] bg-white`,
          { fontFamily: "Outfit_500Medium" },
        ]}
      />
    </View>
  );
};

export default InputField;
