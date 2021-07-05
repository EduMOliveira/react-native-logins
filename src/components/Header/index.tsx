import React from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./styles";

type Props = {
  color: string;
};

const Header = ({ color }: Props) => {
  const { goBack } = useNavigation();

  return (
    <SafeAreaView style={{ position: "absolute", zIndex: 99 }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={goBack} style={{ flexDirection: "row" }}>
          <MaterialIcons name="keyboard-arrow-left" size={35} color={color} />
          <View style={styles.textContainer}>
            <Text style={[styles.text, { color: color }]}>Back</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;
