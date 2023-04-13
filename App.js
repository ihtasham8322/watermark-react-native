import { useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './src/stacks/AuthStack';
import ProtectedStack from './src/stacks/Protected';

import { persistor, store } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider, useDispatch, useSelector } from 'react-redux';
import { checkAuth } from './src/redux/reducer/auth';



import * as SplashScreen from 'expo-splash-screen';

import { useFonts, Outfit_500Medium } from '@expo-google-fonts/outfit';


SplashScreen.preventAutoHideAsync();

function StackRenderer() {
  const isAuthenticated = useSelector(checkAuth);

  if (isAuthenticated) {
    return <ProtectedStack />;
  } else {
    return <AuthStack />;
  }
}

export default function App() {
  const [fontsLoaded, error] = useFonts({
    Outfit_500Medium,
  });

  useEffect(() => {
    if (fontsLoaded) {
      // Hide the splash screen after the fonts have loaded and the
      // UI is ready.
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // Prevent rendering until the font has loaded
  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }

  if (error) {
    return <Text>There was an error loading the fonts</Text>;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <SafeAreaView style={[styles.container]}>
            <NavigationContainer>
              <StackRenderer />
            </NavigationContainer>
          </SafeAreaView>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});