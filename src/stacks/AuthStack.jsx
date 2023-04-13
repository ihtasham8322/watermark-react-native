import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ForgetPasswordScreen from "../Screens/ForgetPassword";
import LoginScreen from "../Screens/Login";
import OTPScreen from "../Screens/OTP";
import CreateAccountScreen from "../Screens/CreateAccount";
import CreatePasswordScreen from "../Screens/CreatePassword";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
      <Stack.Screen name="Otp" component={OTPScreen} />
      <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
      <Stack.Screen name="CreatePassword" component={CreatePasswordScreen} />
    </Stack.Navigator>
  );
}
