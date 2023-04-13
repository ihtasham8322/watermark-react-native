import React from "react";
import { View, Image, KeyboardAvoidingView, ScrollView } from "react-native";
import Header from "../../Components/Header";
import tw from "../../lib/tailwind";
import Social from "./components/socialIcons";
import Banner from "./components/banner";
import { useSelector } from "react-redux";
import { SharedElement } from "react-navigation-shared-element";
import { selectCurrentPost } from "../../redux/reducer/posts";
import { BACKEND_URL } from "../../config";

const PreviewScreen = () => {
  const currentPost = useSelector(selectCurrentPost);
  const [platforms, setPlatforms] = React.useState([]);

  function handleSocials(platform) {
    if (platforms.includes(platform)) {
      setPlatforms(platforms.filter((p) => p !== platform));
    } else {
      setPlatforms([...platforms, platform]);
    }
  }

  return (
    <ScrollView style={tw`h-full bg-white`}>
      <Header text={"Preview"} />
      <SharedElement id={`item.${currentPost._id}.photo`}>
        <Image
          style={tw`h-[255px] w-[378px] bg-gray-100 rounded-lg mx-4 my-8`}
          source={{
            uri: currentPost.isNew
              ? currentPost.imageUrl
              : `${BACKEND_URL}/${currentPost.imageUrl}`,
          }}
          resizeMode="contain"
        />
      </SharedElement>
      <Social
        platforms={currentPost.isNew ? platforms : currentPost.platforms}
        onPress={handleSocials}
      />
      <Banner post={currentPost} platforms={platforms} />
      <View style={tw`h-20 mt-12`} />
    </ScrollView>
  );
};

PreviewScreen.sharedElements = (route) => {
  const id = route.params.id;
  return [
    {
      id: `item.${id}.photo`,
    },
  ];
};

export default PreviewScreen;
