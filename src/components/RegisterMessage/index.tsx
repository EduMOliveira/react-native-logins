import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

type Props = {
  text: string;
  btnText: string;
  btnColor: string;
};

const RegisterMessage = ({ text, btnColor, btnText }: Props) => {
  return (
    <View style={styles.registerContainer}>
      <Text style={styles.registerText}>{text}</Text>
      <TouchableOpacity>
        <Text style={[styles.registerButton, { color: btnColor }]}>{btnText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterMessage;
