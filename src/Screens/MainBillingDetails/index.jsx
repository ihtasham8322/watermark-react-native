import React from "react";
import { TouchableOpacity , View ,TextInput} from "react-native";
import Header from "../../Components/Header";
import tw from "../../lib/tailwind";
import { Feather } from "@expo/vector-icons";
import Cards from "./component/Cards";
import { useNavigation } from "@react-navigation/native";

const MainBillingDetails = () => {
    const navigation = useNavigation();

  return (
    <>
      <View style={tw`bg-white h-full`}>
        <View style={tw`flex flex-row items-center justify-between `}>
          <Header text="Billing Details" />
            <TouchableOpacity onPress={() => navigation.navigate("EditBillingDetails")}>
          <Feather
            style={tw`mr-4 mt-3`}
            name="edit-3"
            size={20}
            color="black"
          />
            </TouchableOpacity>
        </View>
        <View style={tw`mt-8`}>
          <Cards
            heading="Billing Address"
            subHeading="400, Abc, xyz street, Delhi - 110001"
            style={tw`bg-[#FFF5D1]`}
          />
          <Cards
            heading="GST Details"
            subHeading="09OOKJAMKLAKKMGYJ"
            style={tw`bg-[#C6FFD6] mt-4`}
          />
        </View>
        <View style={tw`mx-6 mt-4 border rounded-2xl border-gray-400 h-28  `}>
            <TextInput style={tw`text-gray-400 p-2`}>Company Details</TextInput>
        </View>
      </View>
    </>
  );
};

export default MainBillingDetails;
