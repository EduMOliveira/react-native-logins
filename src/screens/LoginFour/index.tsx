import React, { useEffect, useRef, useState } from "react";

import {
  Animated,
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { Input } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";

import Header from "../../components/Header";
import RegisterMessage from "../../components/RegisterMessage";
import Spacer from "../../components/Spacer";

import Logo from "../../assets/Login4/locker.png";

import styles from "./styles";

const LoginFour = () => {
  const [showPass, setShowPass] = useState(false);
  const [emailField, setEmailField] = useState("");
  const [passField, setPassField] = useState("");
  const ballValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(ballValue, {
          toValue: 1,
          duration: 5000,
          useNativeDriver: true,
        }),
        Animated.timing(ballValue, {
          toValue: 0,
          duration: 3000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  });

  const xVal = (val: number[]) =>
    ballValue.interpolate({
      inputRange: [0, 1],
      outputRange: val,
    });

  const yVal = (val: number[]) =>
    ballValue.interpolate({
      inputRange: [0, 1],
      outputRange: val,
    });

  const animStyle = (x: number[], y: number[]) => {
    return {
      transform: [{ translateY: xVal(x) }, { translateX: yVal(y) }],
    };
  };

  return (
    <KeyboardAvoidingView
      contentContainerStyle={{ flexGrow: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ height: "100%" }} bounces={false}>
        <Header color={"#000"} />

        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Animated.View style={[styles.ballOne, animStyle([0, 10], [0, 10])]} />
            <Animated.View style={[styles.ballTwo, animStyle([0, 10], [10, 5])]} />
            <Animated.View style={[styles.ballThree, animStyle([5, 0], [5, 0])]} />
            <Image source={Logo} style={styles.image} />
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>Welcome To Safelifty!</Text>
            <Text style={styles.subTitle}>Keep your data safe!</Text>
          </View>

          <View style={styles.inputsContainer}>
            <Input
              containerStyle={styles.containerStyle}
              labelStyle={styles.labelStyle}
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={styles.inputStyle}
              errorStyle={styles.errorStyle}
              onChangeText={(e) => setEmailField(e)}
              value={emailField}
              label="Email"
            />

            <Spacer h={10} />

            <Input
              containerStyle={styles.containerStyle}
              labelStyle={styles.labelStyle}
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={styles.inputStyle}
              errorStyle={styles.errorStyle}
              rightIcon={
                <FontAwesome
                  onPress={() => setShowPass(!showPass)}
                  name={showPass ? "eye" : "eye-slash"}
                  size={18}
                  color="#a5a1a1"
                />
              }
              rightIconContainerStyle={styles.rightIconContainerStyle}
              secureTextEntry={!showPass}
              onChangeText={(e) => setPassField(e)}
              value={passField}
              label="Password"
            />

            <TouchableOpacity style={styles.buttonLogin}>
              <Text style={styles.buttonLoginText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forgotContainer}>
              <Text style={styles.forgot}>Forgot password?</Text>
            </TouchableOpacity>
          </View>

          <RegisterMessage btnColor="#7000F0" btnText="Register!" text="Don't have an account? " />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginFour;
