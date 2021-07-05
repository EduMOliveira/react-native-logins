import React, { useState } from "react";
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Image, Platform, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import { Input } from "react-native-elements";

import Header from "../../components/Header";
import RegisterMessage from "../../components/RegisterMessage";
import GoogleLogo from "../../assets/Login2/googleLogo.png";

import styles from "./styles";

const LoginTwo = () => {
  const [emailField, setEmailField] = useState("");
  const [passField, setPassField] = useState("");
  const [showPass, setShowPass] = useState(false);

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flexGrow: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} bounces={false}>
        <Header color="#000" />

        <View style={styles.container}>
          <View style={styles.bgWrapper}>
            <LinearGradient colors={["#ff9a44", "#fc6076"]} style={styles.bg}>
              <Text style={styles.title}>dummy</Text>
            </LinearGradient>
          </View>

          <View style={styles.loginContainer}>
            <Text style={styles.loginTitle}>Log In</Text>

            <Input
              containerStyle={{ paddingHorizontal: 25 }}
              labelStyle={styles.labelStyle}
              inputContainerStyle={styles.inputContainerStyle}
              leftIconContainerStyle={styles.leftIconContainerStyle}
              inputStyle={styles.inputStyle}
              label="E-MAIL ADDRESS"
              leftIcon={<FontAwesome name="user" size={18} color="#a5a1a1" />}
              value={emailField}
              onChangeText={(t) => setEmailField(t)}
            />

            <Input
              containerStyle={{ paddingHorizontal: 25, marginTop: -10 }}
              labelStyle={styles.labelStyle}
              inputContainerStyle={styles.inputContainerStyle}
              leftIconContainerStyle={styles.leftIconContainerStyle}
              rightIconContainerStyle={{ marginRight: 8 }}
              inputStyle={styles.inputStyle}
              label="PASSWORD"
              leftIcon={<FontAwesome name="lock" size={19} color="#a5a1a1" />}
              rightIcon={
                <FontAwesome
                  onPress={() => setShowPass(!showPass)}
                  name={showPass ? "eye" : "eye-slash"}
                  size={16}
                  color="#a5a1a1"
                />
              }
              secureTextEntry={!showPass}
              value={passField}
              onChangeText={(t) => setPassField(t)}
            />

            <TouchableOpacity style={styles.forgotContainer}>
              <Text style={styles.forgotButton}>Forgot you Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonContainer}>
              <LinearGradient
                colors={["#ff9a44", "#fc6076"]}
                style={styles.buttonGradient}
                start={{ x: 2, y: 0 }}
                end={{ x: 0, y: 0 }}
              >
                <Text style={styles.buttonText}>Log In</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome style={styles.socialIcon} name="facebook-square" size={24} color="#3b5998" />
            <Text style={styles.socialButtonText}>Login with Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Image source={GoogleLogo} style={styles.socialButtonSvg} />
            <Text style={styles.socialButtonText}>Login with Google</Text>
          </TouchableOpacity>

          <RegisterMessage btnColor="#fc6076" text="Don't have an account? " btnText="Register" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginTwo;
