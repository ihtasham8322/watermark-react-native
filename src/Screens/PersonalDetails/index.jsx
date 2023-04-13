import React, { useState } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";

import { useDispatch } from "react-redux";
import { setUpdatedUser } from "../../redux/actions/user";

import tw from "../../lib/tailwind";

import Header from "../../Components/Header";
import Button from "./component/Button";
import GradientButton from "./component/GradientButton";
import InputField from "../../Components/InputField";
import MainButton from "../../Components/MainButton";

const PersonalDetails = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [gender, setGender] = useState("Male");

  const handleFormSubmit = async (personalDetails) => {
    dispatch(setUpdatedUser({ ...personalDetails, gender }));
    navigation.goBack();
  };

  return (
    <View style={tw`bg-white h-full`}>
      <Header text="Personal Details" />
      <View style={tw`mx-6 mt-4`}>
        <Text
          style={[
            tw`text-[18px] font-semibold mt-2`,
            { fontFamily: "Outfit_500Medium" },
          ]}
        >
          Gender
        </Text>
        <View>
          <View style={tw`flex flex-row mt-4`}>
            <GradientButton
              style={tw`w-28 bg-gray-200`}
              text={"Male"}
              showGradient={gender === "Male" ? true : false}
              onPress={() => setGender("Male")}
            />
            <View style={tw`p-1`} />
            <GradientButton
              style={tw`w-28 bg-gray-200`}
              text={"Female"}
              showGradient={gender === "Female" ? true : false}
              onPress={() => setGender("Female")}
            />
          </View>
        </View>
        <Formik
          initialValues={{
            dob: "",
            qualification: "",
          }}
          // validate={validateForm}
          onSubmit={handleFormSubmit}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={tw`mt-3`}>
              <Text
                style={[
                  tw`mt-4 text-[18px] font-semibold`,
                  { fontFamily: "Outfit_500Medium" },
                ]}
              >
                Date of birth
              </Text>
              <InputField
                style={tw`mt-2`}
                type="date"
                placeholder="DD/MM/YYYY"
                onChangeText={handleChange("dob")}
                onBlur={handleBlur("dob")}
                value={values.dob}
              />
              <Text
                style={[
                  tw`mt-4 text-[18px] font-semibold`,
                  { fontFamily: "Outfit_500Medium" },
                ]}
              >
                Qualification
              </Text>
              <InputField
                style={tw`mt-2`}
                type="date"
                placeholder="Enter Your Qualification"
                onChangeText={handleChange("qualification")}
                onBlur={handleBlur("qualification")}
                value={values.qualification}
              />
              <MainButton
                text="Save & Continue"
                style={tw`mt-6`}
                onPress={handleSubmit}
              />
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default PersonalDetails;
