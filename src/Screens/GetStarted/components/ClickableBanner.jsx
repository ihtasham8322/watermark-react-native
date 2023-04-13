import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import tw from "../../../lib/tailwind";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

const renderButton = ({ user, key, onPress, color }) => {
  //check if user object contains the key
  const isKeyAvailable = user?.hasOwnProperty(key);
  return (
    <>
      {!isKeyAvailable ? (
        <TouchableOpacity
          onPress={onPress}
          style={tw`h-[28px] w-[28px] bg-white rounded-full p-1 flex items-center justify-center`}
        >
          <AntDesign name="right" size={16} color={color} />
        </TouchableOpacity>
      ) : (
        <View
          style={tw`h-[28px] w-[28px] bg-white rounded-full p-1 flex items-center justify-center`}
        >
          <AntDesign name="check" size={16} color={color} />
        </View>
      )}
    </>
  );
};

export default ClickableBanner = ({
  contentKey: key,
  onPress,
  color,
  title,
  user,
}) => (
  <View>
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <LinearGradient
        colors={color}
        style={tw`mt-6 rounded-4 w-full h-[121px]`}
        start={{ x: 0, y: 0 }}
        end={{ x: 1.2, y: 0.5 }}
      >
        <View style={tw``}>
          <View style={tw`m-7 my-12 flex flex-row justify-between`}>
            <Text
              style={[
                tw`text-[19px] text-white font-semibold`,
                { fontFamily: "Outfit_500Medium" },
              ]}
            >
              {title}
            </Text>
            {renderButton({ user, key, onPress, color: color[0] })}
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  </View>
);
