import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import BottomTabs from "./BottomTab";
import EditBillingDetails from "../Screens/EditBillingDetails";
import BrandDetails from "../Screens/BrandDetails";
import BillingAddressScreen from "../Screens/BillingAddress";
import PackageScreen from "../Screens/PackageScreen";
import GetStatedScreen from "../Screens/GetStarted";
import MainBrandDetailScreen from "../Screens/MainBrandDetails";
import PersonalDetailScreen from "../Screens/PersonalDetails";
import MainBillingDetails from "../Screens/MainBillingDetails";
import BillingDetails from "../Screens/BillingDetails";
import PlansScreen from "../Screens/PlansScreen";
import SocialsScreen from "../Screens/Socials";
import CarouselScreen from "../Screens/CarouselScreen";
import CaptionsScreen from "../Screens/CaptionsScreen";
import PreviewScreen from "../Screens/PreviewScreen";
import HelpScreen from "../Screens/HelpScreen";

const Stack = createSharedElementStackNavigator();

export default function ProtectedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeStack"
    >
      <Stack.Screen name="HomeStack" component={BottomTabs} />
      <Stack.Screen name="GetStartedScreen" component={GetStatedScreen} />
      <Stack.Screen name="EditBillingDetails" component={EditBillingDetails} />
      <Stack.Screen name="MainBillingDetails" component={MainBillingDetails} />
      <Stack.Screen name="BillingDetails" component={BillingDetails} />
      <Stack.Screen name="BrandDetails" component={BrandDetails} />
      <Stack.Screen name="BillingAddress" component={BillingAddressScreen} />
      <Stack.Screen name="PackageScreen" component={PackageScreen} />
      <Stack.Screen name="MainBrandDetails" component={MainBrandDetailScreen} />
      <Stack.Screen name="PersonalDetail" component={PersonalDetailScreen} />
      <Stack.Screen name="Plans" component={PlansScreen} />
      <Stack.Screen name="socials" component={SocialsScreen} />
      <Stack.Screen name="Carousel" component={CarouselScreen} />
      <Stack.Screen name="CaptionsScreen" component={CaptionsScreen} />
      <Stack.Screen name="PreviewScreen" component={PreviewScreen} />
      <Stack.Screen name="Help" component={HelpScreen} />
    </Stack.Navigator>
  );
}
