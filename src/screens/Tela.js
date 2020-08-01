import React from "react";
import { StyleSheet, View, Text } from "react-native";

const TelaScreen = () => {
  return (
    <>
    <View style={styles.viewStyle}>
      <Text>Tela Navegada</Text>
    </View>
    </>
  )
}

export default TelaScreen;

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})