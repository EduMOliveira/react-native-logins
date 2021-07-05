import React from "react";
import { Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import CardPages from "../../components/CardPages";

import styles from "./styles";

const Main = () => {
  const { navigate } = useNavigation();

  const pagesData = [
    { title: "LoginOne", color: "#FF7B17" },
    { title: "LoginTwo", color: "#fc6076" },
    { title: "LoginThree", color: "#4d4b4b" },
    { title: "LoginFour", color: "#7000F0" },
    { title: "LoginFive", color: "#fa3cd1" },
  ];

  const handleNavigate = (name: string) => {
    navigate(name);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={styles.flatList}
        data={pagesData}
        ListHeaderComponent={() => <Text style={styles.pageTitle}>Pages</Text>}
        renderItem={({ item }) => (
          <CardPages color={item.color} onPress={() => handleNavigate(item.title)} title={item.title} />
        )}
        keyExtractor={(i) => i.title}
      />
    </SafeAreaView>
  );
};

export default Main;
