import React from "react";
import { View } from "react-native";

type Props = {
  w?: number | string;
  h?: number | string;
};

const Spacer = ({ w = 0, h = 0 }: Props) => {
  return <View style={{ width: w, height: h }} />;
};

export default Spacer;
