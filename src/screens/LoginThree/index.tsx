import React, { useState } from "react";

import { KeyboardAvoidingView, View, Text, ScrollView, Platform } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Input } from "react-native-elements";

import Header from "../../components/Header";
import Logo from "../../assets/Login3/logo.svg";

import styles from "./styles";

const LoginThree = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flexGrow: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} bounces={false}>
        <Header color="#000" />

        <View style={styles.container}>
          <View style={styles.content}>
            <View style={styles.logoContainer}>
              <Logo width={"70%"} height={"65%"} />
              <Text style={styles.txtWelcome}>Welcome Back!</Text>
            </View>

            <Input
              containerStyle={{ paddingHorizontal: 25 }}
              labelStyle={styles.labelStyle}
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={styles.inputStyle}
              errorStyle={{ height: 5 }}
              label="Email"
              value={email}
              onChangeText={(e) => setEmail(e)}
            />

            <Input
              containerStyle={{ paddingHorizontal: 25 }}
              labelStyle={styles.labelStyle}
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={styles.inputStyle}
              label="Password"
              value={pass}
              onChangeText={(e) => setPass(e)}
              secureTextEntry
            />

            <View style={styles.rowButton}>
              <Text style={styles.bottomTitle}>Sing in</Text>
              <TouchableOpacity style={styles.buttonLogin}>
                <AntDesign name="arrowright" size={34} color="#fff" />
              </TouchableOpacity>
            </View>

            <View style={styles.rowForgot}>
              <TouchableOpacity>
                <Text style={styles.btnsText}>Sing up</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.btnsText}>Forgot Password</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginThree;
