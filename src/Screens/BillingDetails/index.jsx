import BillingForm from "./component/BillingForm";
import { View } from "react-native";
import tw from "../../lib/tailwind";
const BillingDetails = () => {
  return (
    <View style={tw`bg-white h-full`}>
      <View>
        <BillingForm text="Complete your billing details" />
      </View>
    </View>
  );
};
export default BillingDetails;
