import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { Input, Switch } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";

import Header from "../../components/Header";
import RegisterMessage from "../../components/RegisterMessage";

import Logo from "../../assets/Login5/logo.png";
import LogoBg from "../../assets/Login5/logoBg.png";

import styles from "./styles";

const LoginFive = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [switchToggle, setSwitchToggle] = useState(true);

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Header color="#000" />
      <ScrollView bounces={false} contentContainerStyle={{ flexGrow: 1 }}>
        <SafeAreaView style={styles.container}>
          <View style={styles.logoWrapper}>
            <View style={styles.logoImgContainer}>
              <Image source={Logo} style={styles.logo} />
            </View>
            <Text style={styles.logoText}>Lover</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={LogoBg} style={styles.image} />
          </View>

          <View style={styles.content}>
            <View style={[styles.row, styles.titleArea]}>
              <Text style={styles.title}>Sign In</Text>

              <View style={[styles.row]}>
                <TouchableOpacity>
                  <View style={styles.socialButton}>
                    <FontAwesome name="whatsapp" size={24} color="#858283" />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity>
                  <View style={styles.socialButton}>
                    <FontAwesome name="facebook" size={22} color="#858283" />
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <Input
              errorStyle={{ height: 0 }}
              labelStyle={styles.labelStyle}
              inputContainerStyle={styles.inputContainerStyle}
              leftIconContainerStyle={styles.leftIconContainerStyle}
              leftIcon={<FontAwesome5 style={styles.icon} name="user-alt" size={18} color="#c9c9c9" />}
              inputStyle={styles.inputStyle}
              label="Username"
              value={email}
              onChangeText={(e) => setEmail(e)}
            />

            <Input
              errorStyle={{ height: 0 }}
              labelStyle={styles.labelStyle}
              inputContainerStyle={styles.inputContainerStyle}
              leftIconContainerStyle={styles.leftIconContainerStyle}
              leftIcon={<MaterialIcons style={styles.icon} name="lock" size={22} color="#c9c9c9" />}
              inputStyle={styles.inputStyle}
              label="Password"
              secureTextEntry
              value={pass}
              onChangeText={(e) => setPass(e)}
            />

            <View style={[styles.row, styles.rememberArea]}>
              <View style={[styles.row, styles.remember]}>
                <Switch
                  value={switchToggle}
                  onValueChange={() => setSwitchToggle(!switchToggle)}
                  color="#f7ac43"
                  style={styles.switch}
                />
                <Text style={styles.rememberText}>Remember</Text>
              </View>

              <TouchableOpacity>
                <Text style={styles.forgetText}>Forget password</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.signButton}>
              <LinearGradient
                colors={["#F86F8D", "#EC4468"]}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                style={styles.signGradient}
              >
                <Text style={styles.signText}>Sign In</Text>
              </LinearGradient>
            </TouchableOpacity>

            <RegisterMessage btnColor="#EC4468" text="Don't have an account? " btnText="Register" />
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginFive;
