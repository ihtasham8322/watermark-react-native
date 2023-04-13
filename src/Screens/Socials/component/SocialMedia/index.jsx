// import { View, Text } from "react-native";
import tw from "../../../../lib/tailwind";
import { AntDesign } from "@expo/vector-icons";
import MainButton from "../../../../Components/MainButton";
import CustomButton from "../../../../Components/CustomButton";
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useAuthRequest, exchangeCodeAsync, revokeAsync, ResponseType } from 'expo-auth-session';
import * as Facebook from 'expo-auth-session/providers/facebook';
import * as WebBrowser from 'expo-web-browser';
import { useEffect } from "react";
import { login } from "../../../../redux/actions/facebook/index.js"
import { useDispatch } from "react-redux";


// require('dotenv').config()

// WebBrowser.maybeCompleteAuthSession();


const SocialMedia = ({ icon }) => {
  const [user, setUser] = useState(null);
  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: "888709748880136",
    prompt: 'login'
  });
  const dispatch = useDispatch();

  if (request) {
    console.log(
      "You need to add this url to your authorized redirect urls on your Facebook app: " +
      request.redirectUri
    );
  }


  const logout = async () => {
    const revokeResponse = await revokeAsync(
      {
        clientId: "e3a666057b7cd96b1ecf000f992db006",
        token: "EAAMoRtzj8wgBAEyZCTU1ZCXidoRcnmjhoCSjh1takLRL4WKMOAAlJYwC5jTsOmdvzBsTpP7aO0ZBmL3ZBBq9jd3mUyrnv7gZAjaAd1phWZCJtr6ZC1sYCNC4jPnECYyXtag8nrASx1J8vM42xStjFJZBaOb8967KZBZCr0wQZCbhbkhDrl6SUIZAXbFIfgIw9zALoKZA2v6Okete9UviBTegm74Qv",
      },

    );
    if (revokeResponse) {
      setAuthTokens(null);
    }
  };

  // useEffect(() => {
  //   if (response && response.type === "success" && response.authentication) {

  //     (async () => {
  //       const userInfoResponse = await fetch(
  //         `https://graph.facebook.com/me?access_token=${response.authentication.accessToken}&fields=id,name,picture.type(large)`
  //       );
  //       const userInfo = await userInfoResponse.json();
  //       console.log("userInfo", userInfo)
  //       setUser(userInfo);
  //     })();
  //   }
  // }, [response]);


  const handlePressAsync = async () => {
    const result = await promptAsync();
    console.log(result)
    if (result.type !== "success") {
      alert("Uh oh, something went wrong");
      return;
    } else {
      const abc = dispatch(login(result))
      console.log(abc)
    }
  };

  return (
    <View
      style={tw`bg-[#F2F2F2] mt-4 py-4 px-4 mx-6 rounded-2xl flex flex-row items-center justify-between  `}
    >
      <View>
        <AntDesign name={icon} size={32} color="black" />
      </View>
      <View>
        {user ? (
          <MainButton text="connected" style={tw`w-28 `} />
        ) : (
          <MainButton text="not connectd" onPress={handlePressAsync} style={tw`w-28 `} />
        )}
      </View>
    </View>
  );
};

export default SocialMedia;
