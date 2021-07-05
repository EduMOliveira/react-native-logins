import React, { useState } from "react";

import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Input } from "react-native-elements";
import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from "react-native";

import RegisterMessage from "../../components/RegisterMessage";
import RoundedButton from "../../components/RoundedButton";
import Header from "../../components/Header";

import Logo from "../../assets/Login1/bg.svg";
import Icon from "../../assets/Login1/icon.png";

import styles from "./styles";

const LoginOne = () => {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flexGrow: 1, backgroundColor: "#f7f7f7" }}
    >
      <View style={styles.logoBackgroundContainer}>
        <Logo />
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.container} bounces={false}>
        <Header color="#000" />

        <View style={styles.content}>
          <View style={styles.introContainer}>
            <Image style={styles.introIcon} source={Icon} />
            <Text style={styles.introTitle}>
              Foodd<Text style={{ color: "red" }}>ley</Text>
            </Text>
          </View>
          <View style={styles.loginContainer}>
            <Text style={styles.loginTitle}>Hello</Text>
            <Text style={styles.loginSubTitle}>Sign into your Account</Text>

            <Input
              onChangeText={(e) => setEmail(e)}
              defaultValue={email}
              containerStyle={{ paddingHorizontal: 25 }}
              labelStyle={{ fontSize: 11, color: "#d1d1d1" }}
              inputContainerStyle={{ height: 31, borderColor: "#d1d1d1" }}
              inputStyle={{ fontSize: 14 }}
              label="Email"
              rightIcon={<MaterialIcons name="email" size={22} color="#FF7B17" />}
            />

            <Input
              onChangeText={(t) => setPass(t)}
              value={pass}
              containerStyle={{ paddingHorizontal: 25 }}
              labelStyle={{ fontSize: 11, color: "#d1d1d1" }}
              inputContainerStyle={{ height: 31, borderColor: "#d1d1d1" }}
              inputStyle={{ fontSize: 14 }}
              label="Password"
              rightIcon={
                <MaterialCommunityIcons
                  name={showPass ? "eye" : "eye-off"}
                  size={22}
                  color="#FF7B17"
                  onPress={() => setShowPass(!showPass)}
                />
              }
              secureTextEntry={!showPass}
            />

            <TouchableOpacity
              style={{
                alignSelf: "flex-end",
                paddingRight: 23,
                marginTop: -14,
                marginBottom: 25,
              }}
            >
              <Text style={styles.loginForgot}>Forgot your Password?</Text>
            </TouchableOpacity>

            <RoundedButton onPress={() => {}} bgColor="#FF7B17" txtColor="#fff" text="Login" width={200} height={40} />

            <Text style={styles.socialText}>Or Login using social Media</Text>

            <View style={styles.socialContainer}>
              <TouchableOpacity>
                <MaterialCommunityIcons name="facebook" size={30} color="#4267B2" />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialCommunityIcons name="twitter" size={30} color="#1DA1F2" />
              </TouchableOpacity>
            </View>
          </View>

          <RegisterMessage btnColor="#FF7B17" text="Don't have an account? " btnText="Register Now" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginOne;
