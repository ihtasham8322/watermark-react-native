import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GradientIcon from "../Components/Gradient/Icon";
import Drawer from "./Drawer";
import Socials from "../Screens/Socials";
import UploadGraphicsScreen from "../Screens/UploadGraphics";
import MainBrandDetailsScreen from "../Screens/MainBrandDetails";
import GetStartedScreen from "../Screens/GetStarted";
import PostScreen from "../Screens/PostScreen";
import PackageScreen from "../Screens/PackageScreen";

import { Entypo, MaterialIcons, AntDesign, Ionicons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
const isIos = Platform.OS === "ios";

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: { display: "none" },
        tabBarStyle: {
          height: !isIos ? 60 : 60,
          backgroundColor: "#fff",
          borderTopWidth: 0,
          elevation: 0,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingBottom: 10,
          paddingTop: 10,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={GetStartedScreen}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <GradientIcon
              size={size}
              focused={focused}
              lib="Entypo"
              name="home"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={PostScreen}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <GradientIcon
              size={size}
              focused={focused}
              lib="FontAwesome"
              name="newspaper-o"
            />
          ),
        }}
      />
      <Tab.Screen
        name="add"
        component={UploadGraphicsScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <GradientIcon
              size={size}
              focused={focused}
              lib="AntDesign"
              name="plussquareo"
            />
          ),
        }}
      />
      <Tab.Screen
        name="BtmBrandDetails"
        component={MainBrandDetailsScreen}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <GradientIcon
              size={size}
              focused={focused}
              lib="AntDesign"
              name="tag"
            />
          ),
        }}
      />
      <Tab.Screen
        name="more"
        component={Drawer}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <GradientIcon
              size={size}
              focused={focused}
              lib="Ionicons"
              name="grid"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
