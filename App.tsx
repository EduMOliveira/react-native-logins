import React from "react";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import { useFonts, Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import { Mitr_600SemiBold, Mitr_500Medium } from "@expo-google-fonts/mitr";
import { Inter_600SemiBold, Inter_700Bold, Inter_900Black } from "@expo-google-fonts/inter";
import { Rajdhani_700Bold } from "@expo-google-fonts/rajdhani";
import { NotoSansTC_700Bold } from "@expo-google-fonts/noto-sans-tc";
import { Exo_900Black } from "@expo-google-fonts/exo";
import { Poppins_700Bold, Poppins_600SemiBold } from "@expo-google-fonts/poppins";

import Routes from "./src/routes";

export default function App() {
  let [fontsLoaded] = useFonts({
    Pacifico_400Regular,
    Mitr_600SemiBold,
    Mitr_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
    Rajdhani_700Bold,
    NotoSansTC_700Bold,
    Exo_900Black,
    Poppins_700Bold,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <StatusBar style="auto" translucent />
        <Routes />
      </>
    );
  }
}
