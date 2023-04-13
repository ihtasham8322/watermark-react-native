import React from "react";
import { View, FlatList, Image, Alert } from "react-native";
import tw from "../../lib/tailwind";
import Header from "../../Components/Header";
import MainButton from "../../Components/MainButton";
import { useNavigation } from "@react-navigation/core";

const data = [
  {
    key: "1",
    text: "Slide 1",
    image: require("../../../assets/Image.png"),
  },
  {
    key: "2",
    text: "Slide 2",
    image: require("../../../assets/Image.png"),
  },
  {
    key: "3",
    text: "Slide 3",
    image: require("../../../assets/Image.png"),
  },
  {
    key: "4",
    text: "Slide 4",
    image: require("../../../assets/Image.png"),
  },
];

const Carousel = () => {
  const navigation = useNavigation();
  const renderItem = ({ item, index }) => {
    return (
      <View style={{ ...tw`mt-6 w-90 px-[10px] ` }}>
        <Image
          source={item.image}
          style={tw`bg-red-400 h-78 w-[100%] rounded-3xl`}
        />
      </View>
    );
  };

  const handleNextPress = () => {
    Alert.alert("Make a bottom Modal, refer figma proto");
    navigation.navigate("CaptionsScreen");
  };

  return (
    <View>
      <Header text="Select" />
      <FlatList
        style={tw`pr-10`}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <MainButton
        onPress={handleNextPress}
        text="Next"
        style={tw`mx-6 mt-12C`}
      />
    </View>
  );
};

export default Carousel;
