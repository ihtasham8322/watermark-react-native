import React, { useEffect } from "react";
import { View, Image, Text, Pressable, FlatList } from "react-native";
import tw from "../../../lib/tailwind";

import { SharedElement } from "react-navigation-shared-element";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts } from "../../../redux/reducer/posts";
import { getPosts } from "../../../redux/actions/posts";
import { setCurrentPost } from "../../../redux/actions";
import { BACKEND_URL } from "../../../config";

const availablePlatforms = [
  { icon: "facebook-square", name: "FACEBOOK" },
  { icon: "instagram", name: "INSTAGRAM" },
  { icon: "twitter", name: "TWITTER" },
  { icon: "linkedin-square", name: "LINKEDIN" },
];

const ClickableBanner = ({
  imageUrl,
  title,
  uploadDate,
  onPress,
  _id,
  platforms,
}) => (
  <Pressable style={tw`w-100`} onPress={onPress}>
    <View style={tw`flex flex-row items-center w-100 p-4 mb-4`}>
      <SharedElement id={`item.${_id}.photo`}>
        <Image
          source={{ uri: `${BACKEND_URL}/${imageUrl}` }}
          style={tw`w-[101px] h-[94px] rounded-[17px]`}
          resizeMode="cover"
        />
      </SharedElement>
      <View style={tw`ml-3 flex flex-col w-70`}>
        <Text
          style={[
            tw`text-sm font-bold pr-6`,
            { fontFamily: "Outfit_500Medium" },
          ]}
        >
          {title}
        </Text>
        <View style={tw`flex flex-row items-center justify-between mt-3 mr-6`}>
          <View>
            <Text
              style={[
                tw`text-xs font-bold`,
                { fontFamily: "Outfit_500Medium" },
              ]}
            >
              {uploadDate}
            </Text>
          </View>
          <View style={tw`flex flex-row mr-2`}>
            {platforms.map((platform, index) => (
              <AntDesign
                name={
                  availablePlatforms.find(
                    (availablePlatform) => availablePlatform.name === platform
                  ).icon
                }
                size={20}
                color={"black"}
                style={tw`h-[25px] w-[25px] ml-2`}
              />
            ))}
          </View>
        </View>
      </View>
    </View>
  </Pressable>
);

const Banner = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch(selectPosts);

  const posts = useSelector(selectPosts);
  // console.log(posts)

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const handleOnPress = (post) => {
    dispatch(setCurrentPost(post));
    navigation.navigate("PreviewScreen", {
      id: post._id,
    });
  };

  return (
    <View>
      {posts?.length > 0 ? (
        <FlatList
          data={posts}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <ClickableBanner
              key={item._id}
              imageUrl={item.imageUrl}
              title={item.title}
              uploadDate={item.uploadDate}
              platforms={item.platforms}
              onPress={() => handleOnPress(item)}
              _id={item._id}
            />
          )}
        />
      ) : (
        <View style={tw`flex flex-row items-center justify-center`}>
          <Text
            style={[tw`text-lg font-bold`, { fontFamily: "Outfit_500Medium" }]}
          >
            No Posts Found
          </Text>
        </View>
      )}
    </View>
  );
};

export default Banner;
