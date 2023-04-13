import React from "react";
import { View, Text } from "react-native";
import tw from "../../lib/tailwind";
import Header from "../../Components/Header";
import MainButton from "../../Components/MainButton";
import UploadImage from "../../Components/UploadImage";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { setCurrentPost } from "../../redux/actions";

const UploadGraphics = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { user } = useSelector((state) => state.root.user);

  const [image, setImage] = React.useState(null);

  const testUpload = () => {
    dispatch(
      setCurrentPost({
        title: "",
        imageUrl: image,
        _id: "uploadImage",
        isNew: true,
      })
    );
    navigation.navigate("PreviewScreen", {
      id: "uploadImage",
    });
  };

  return (
    <View style={tw`bg-white h-full`}>
      <Header text="Upload Graphics" />
      <Text
        style={[
          tw`text-[16px] font-semibold text-center mt-6`,
          { fontFamily: "Outfit_500Medium" },
        ]}
      >
        You have{" "}
        <Text
          style={[
            tw`text-[16px] text-[#4141DB] font-semibold text-center mt-6`,
            { fontFamily: "Outfit_500Medium" },
          ]}
        >
          {user?.credits || 0}{" "}
        </Text>
        Credits left
      </Text>
      <View style={tw`mx-6 mt-8 flex justify-center`}>
        <UploadImage
          style={tw`h-40`}
          text=" Upload Image & video from gallery"
          setImage={setImage}
          image={image}
          sharedElementId="uploadImage"
        />
        <Text
          style={[
            tw`text-[23px] text-center py-10 font-semibold`,
            { fontFamily: "Outfit_500Medium" },
          ]}
        >
          OR
        </Text>
        <Text
          style={[
            tw`text-[20px] font-semibold`,
            { fontFamily: "Outfit_500Medium" },
          ]}
        >
          Smart Graphics
        </Text>
        <MainButton
          text="Custom made graphics just for you"
          style={tw`mt-8`}
          onPress={testUpload}
        />
      </View>
    </View>
  );
};

export default UploadGraphics;
