import React, { useState, useEffect } from "react";
import {
  Text,
  TouchableOpacity,
  Platform,
  View,
  Image,
  Pressable,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import tw from "../../lib/tailwind";

import Gradient from "../Gradient";
import { SharedElement } from "react-navigation-shared-element";

const UploadImage = ({ style, text, setImage, image, sharedElementId }) => {
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const PickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <View style={tw`relative`}>
      <Gradient />
      {!image || image.length === 0 ? (
        <TouchableOpacity
          onPress={PickImage}
          style={{
            ...style,
            ...tw`rounded-2xl border-2 border-dashed border-white h-[145px]`,
          }}
        >
          <View
            style={tw`flex items-center justify-center bg-gray-100 rounded-2xl h-full`}
          >
            <AntDesign name="upload" size={24} color="black" />
            <Text
              style={[
                {
                  ...tw`mt-3 bg-white px-6 py-3 text-[#0B0B0B] rounded-3xl`,
                },
                ,
                { fontFamily: "Outfit_500Medium" },
              ]}
            >
              {text}
            </Text>
          </View>
        </TouchableOpacity>
      ) : (
        <Pressable
          onPress={PickImage}
          style={tw`h-[220px] rounded-2xl w-full border-2 border-dashed border-white`}
        >
          <View
            style={tw`bg-gray-200 h-full rounded-2xl flex flex-col items-center justify-center `}
          >
            <SharedElement
              style={tw`w-full h-[145px]`}
              id={`item.${sharedElementId}.post`}
            >
              <Image
                source={{ uri: image }}
                style={{
                  ...style,
                  ...tw`rounded-2xl flex items-center justify-center h-[145px]`,
                }}
                // resizeMode="cover"
              />
            </SharedElement>
            <Text
              style={[
                {
                  ...tw`mt-3 bg-white px-6 py-3 text-[#0B0B0B] rounded-3xl`,
                },
                { fontFamily: "Outfit_500Medium" },
              ]}
            >
              Choose another image
            </Text>
          </View>
        </Pressable>
      )}
    </View>
  );
};

export default UploadImage;
