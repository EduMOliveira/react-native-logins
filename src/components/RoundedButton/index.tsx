import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

type Props = {
  bgColor: string;
  txtColor: string;
  text: string;
  width: number;
  height: number;
  onPress: () => void;
};

const RoundedButton: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.container,
        {
          backgroundColor: props.bgColor,
          width: props.width,
          height: props.height,
        },
      ]}
    >
      <Text
        style={[
          styles.buttonText,
          {
            color: props.txtColor,
          },
        ]}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default RoundedButton;
