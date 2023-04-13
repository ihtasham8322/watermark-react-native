import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
} from "react-native";
import tw from "../../../lib/tailwind";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../../redux/actions/posts";
import { useNavigation } from "@react-navigation/core";
import { selectUser } from "../../../redux/reducer/user";

const banner = ({ post, platforms }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    user: { _id },
  } = useSelector(selectUser);

  const [scheduleDate, setScheduleDate] = React.useState(null);
  const [title, setTitle] = React.useState(post.title);

  const upload = (data) => {
    console.log(data)
    dispatch(createPost(data));
  };

  const handleSchedulePress = () => {
    //upload image to server
    const formData = new FormData();
    formData.append("file", {
      uri: post.imageUrl,
      type: "image/jpeg",
      name: "image.jpg",
    });
    upload(formData);
  };

  const handlePublishPress = () => {
    const formData = new FormData();
    formData.append("file", {
      uri: post.imageUrl,
      type: "image/jpeg",
      name: `${_id}_${Date.now()}.jpg`,
    });

    formData.append("title", title);
    formData.append("uploadType", "NOW");
    formData.append("platforms", platforms);

    upload(formData);
    ToastAndroid.show("Post Created", ToastAndroid.SHORT);
    navigation.navigate("Post");
  };

  return (
    <View style={tw`bg-[#F2F2F2] w-[378px] h-[150px] mx-4 my-8 rounded-xl`}>
      <TextInput
        style={tw`font-semibold rounded-t-xl py-2 px-4`}
        onChangeText={setTitle}
        value={title}
        multiline={true}
        numberOfLines={7}
        placeholder="Enter Caption..."
      />
      <View style={tw`relative`}></View>
      <View
        style={tw`bg-[#E3E3E3] w-full h-[39px] rounded-b-xl flex flex-row absolute bottom-0`}
      >
        <MaterialIcons
          name="emoji-emotions"
          size={24}
          color="black"
          style={tw`m-2 mx-4`}
        />
        <View style={tw`flex flex-row items-center w-[310px] justify-end`}>
          {scheduleDate && (
            <Text
              style={tw`text-black bg-white mt-2 h-[25px] w-[71px] rounded-full p-1 flex text-center`}
            >
              18 Jan, 23
            </Text>
          )}
          <TouchableOpacity
            onPress={handleSchedulePress}
            style={tw`text-black bg-white rounded-full h-[25px] px-2 flex flex-row items-center justify-center mr-2`}
          >
            <Text>Schedule</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handlePublishPress}
            style={tw`text-black bg-white rounded-full h-[25px] px-2 flex flex-row items-center justify-center`}
          >
            <Text>Publish Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default banner;
