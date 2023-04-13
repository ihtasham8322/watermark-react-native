import React, { useState } from "react";
import Header from "../../Components/Header";
import tw from "../../lib/tailwind";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import InputField from "../../Components/InputField";

import { useNavigation } from "@react-navigation/native";

import { AntDesign } from "@expo/vector-icons";
import MainButton from "../../Components/MainButton";

const BillingAddress = () => {
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);

  const handleCheckboxPress = () => {
    setChecked(!checked);
  };
  const gotoLogin = () => {
    navigation.navigate("Login");
  };
  const gotoPackageScreen =()=>{
    navigation.navigate("PackageScreen")
  }
  return (
    <ScrollView style={tw`bg-white `}>
      <View>
        <Header text="Billing address" />
        <View style={tw`mt-4`}>
          <InputField
            placeholder="Flat, House no, Building,  Company,Apartment"
            type="text"
            style={tw`mx-6`}
          />
          <InputField
            placeholder="Area, Street, Sector, Village"
            type="text"
            style={tw`mx-6`}
          />
          <View style={tw`flex flex-row mx-6 `}>
            <InputField placeholder="City" type="text" style={tw`w-[28%] `} />
            <InputField
              placeholder="State"
              type="text"
              style={tw`w-[28%] ml-4`}
            />
            <InputField
              placeholder="Pin Code"
              type="text"
              style={tw`w-[35%] ml-4`}
            />
          </View>
        </View>
      </View>

      <Text style={tw`text-[20px] mx-6 font-semibold`}>GST Detail</Text>
      <InputField
        placeholder="Enter GST Number"
        type="text"
        style={tw`mx-6 mt-4`}
      />
      <InputField
        placeholder="Enter Company name"
        type="text"
        style={tw`mx-6`}
      />
      <View style={tw`flex flex-row justify-end`}>
        <Text style={tw`text-gray-500 mr-6`}>Optional</Text>
      </View>
      <View style={tw`mx-6 flex flex-row items-center mt-2`}>
        <TouchableOpacity onPress={handleCheckboxPress}>
          <AntDesign
            name={checked ? "check-box" : "checksquareo"}
            size={20}
            style={tw`text-gray-500`}
          />
        </TouchableOpacity>
        <Text style={tw`ml-2 text-gray-500 font-semibold `}>
          Company address is same as billing address
        </Text>
      </View>
      <View style={tw`mt-4`}>
        <InputField
          placeholder="Flat, House no, Building,  Company,Apartment"
          type="text"
          style={tw`mx-6`}
        />
        <InputField
          placeholder="Area, Street, Sector, Village"
          type="text"
          style={tw`mx-6`}
        />
        <View style={tw`flex flex-row mx-6 `}>
          <InputField placeholder="City" type="text" style={tw`w-[28%] `} />
          <InputField
            placeholder="State"
            type="text"
            style={tw`w-[28%] ml-4`}
          />
          <InputField
            placeholder="Pin Code"
            type="text"
            style={tw`w-[35%] ml-4`}
          />
        </View>
        <View style={tw`mx-6 mb-4`}>
          <MainButton text="Next" onPress={gotoPackageScreen} />
        </View>
      </View>
      <Pressable style={tw`mb-4`} onPress={gotoLogin}>
        <Text style={tw`text-[13px] font-light text-center`}>
          Don't have an account?{" "}
          <Text style={tw`text-[#F534F9] font-semibold`}>Sign Up</Text>
        </Text>
      </Pressable>
    </ScrollView>
  );
};

export default BillingAddress;
