import React from "react";
import { View } from "react-native";
import tw from "../../lib/tailwind";
import InputField from "../InputField";

const Address = ({ values, handleChange, handleBlur }) => {
  return (
    <View style={tw`mt-4`}>
      <InputField
        placeholder="Flat, House no, Building,  Company,Apartment"
        type="text"
        style={tw`mx-6`}
        onChangeText={handleChange("address.line1")}
        onBlur={handleBlur("address.line1")}
        value={values.address.line1}
      />
      <InputField
        placeholder="Area, Street, Sector, Village"
        type="text"
        style={tw`mx-6`}
        onChangeText={handleChange("address.line2")}
        onBlur={handleBlur("address.line2")}
        value={values.address.line2}
      />
      <View style={tw`flex flex-row mx-6 `}>
        <InputField
          placeholder="City"
          type="text"
          style={tw`w-[28%] `}
          onChangeText={handleChange("address.city")}
          onBlur={handleBlur("address.city")}
          value={values.address.city}
        />
        <InputField
          placeholder="State"
          type="text"
          style={tw`w-[28%] ml-4`}
          onChangeText={handleChange("address.state")}
          onBlur={handleBlur("address.state")}
          value={values.address.state}
        />
        <InputField
          placeholder="Pin Code"
          type="text"
          style={tw`w-[35%] ml-4`}
          onChangeText={handleChange("address.pincode")}
          onBlur={handleBlur("address.pincode")}
          value={values.address.pincode}
        />
      </View>
    </View>
  );
};

export default Address;
