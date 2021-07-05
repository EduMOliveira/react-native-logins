import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";

type Props = {
  color: string;
  title: string;
  onPress: () => void;
};

const CardPages = (props: Props) => {
  return (
    <View style={styles.cardContainer}>
      <View style={[styles.cardColor, { backgroundColor: props.color }]} />
      <View style={styles.rowBetween}>
        <Text style={styles.cardTitle}>{props.title}</Text>

        <TouchableOpacity onPress={props.onPress} style={styles.cardButton}>
          <AntDesign name="arrowright" size={18} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardPages;
