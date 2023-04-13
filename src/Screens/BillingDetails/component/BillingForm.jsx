import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setUpdatedUser } from "../../../redux/actions/user/index.js";

import { Formik } from "formik";

import tw from "../../../lib/tailwind.js";

import Header from "../../../Components/Header";
import InputField from "../../../Components/InputField";
import MainButton from "../../../Components/MainButton";

const initialValues = {
  address: {
    line1: "",
    line2: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  },
  gstin: "",
  companyName: "",
  pan: "",
};

const BillingForm = ({ text }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleFormSubmit = (billingDetails) => {
    // console.log("billingDetails", billingDetails)
    billingDetails = JSON.stringify({ billingDetails })
    dispatch(setUpdatedUser({ "data": billingDetails }));
    navigation.goBack();
  };

  return (
    <View style={tw`bg-white h-full`}>
      <Header text="Billing Details" />
      <Text
        style={[
          tw`ml-11 text-subHeading-custom-color text-gray-400`,
          { fontFamily: "Outfit_500Medium" },
        ]}
      >
        {text}
      </Text>
      <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            <View style={tw`mt-8`}>
              <InputField
                placeholder="Flat, House No, Building, Company,Apartment"
                style={tw`mx-6`}
                onChangeText={handleChange("address.line1")}
                onBlur={handleBlur("address.line1")}
                value={values.address.line1}
              />
              <InputField
                placeholder="Area, Street, Sector, Village"
                style={tw`mx-6`}
                onChangeText={handleChange("address.line2")}
                onBlur={handleBlur("address.line2")}
                value={values.address.line2}
              />

              <View style={tw`flex flex-row mx-6 `}>
                <InputField
                  placeholder="City"
                  style={tw`w-[28%]`}
                  onChangeText={handleChange("address.city")}
                  onBlur={handleBlur("address.city")}
                  value={values.address.city}
                />
                <InputField
                  placeholder="State"
                  style={tw`w-[28%] ml-4`}
                  onChangeText={handleChange("address.state")}
                  onBlur={handleBlur("address.state")}
                  value={values.address.state}
                />
                <InputField
                  placeholder="Pin Code"
                  style={tw`w-[35%] ml-4`}
                  onChangeText={handleChange("address.pincode")}
                  onBlur={handleBlur("address.pincode")}
                  value={values.address.pincode}
                />
              </View>

              <InputField
                placeholder="Enter GST Number"
                style={tw`mx-6`}
                onChangeText={handleChange("gstin")}
                onBlur={handleBlur("gstin")}
                value={values.gstin}
              />
              <InputField
                placeholder="Enter Company name"
                style={tw`mx-6`}
                onChangeText={handleChange("companyName")}
                onBlur={handleBlur("companyName")}
                value={values.companyName}
              />
              <InputField
                placeholder="Enter PAN Number"
                style={tw`mx-6`}
                onChangeText={handleChange("pan")}
                onBlur={handleBlur("pan")}
                value={values.pan}
              />
            </View>
            <View style={tw`absolute bottom-10 w-[100%]`}>
              <MainButton
                text="Save"
                style={tw`mx-6 mt-4 `}
                onPress={handleSubmit}
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};
export default BillingForm;
