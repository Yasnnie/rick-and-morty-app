/*
Desenvolvido por: José Matheus e Yasmin Carvalho 
*/

import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { List } from "./src/components/List";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <List />
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242236",
  },
});
