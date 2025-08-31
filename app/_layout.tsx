import { Stack } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

export default function RootLayout() {
  const [firstTime, setFirstTime] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      //await AsyncStorage.removeItem("onboardingSeen");
      const seen = await AsyncStorage.getItem("onboardingSeen");
      setFirstTime(seen ? false : true);
    })();
  }, []);

  if (firstTime === null) {
    return (
      <View style={{ flex:1, justifyContent:"center", alignItems:"center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Stack screenOptions={{headerShown: false}}>
      {firstTime ? (
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />
      ) : (
        <Stack.Screen name="login" options={{ headerShown: false }} />
      )}
    </Stack>
  )
}
