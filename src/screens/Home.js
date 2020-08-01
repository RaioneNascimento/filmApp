import React from "react";
import { Text, View, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <>
     <View style={styles.viewStyle}>
       <Text style={styles.viewText}>Séries Inc.</Text>
     </View>
    </>
  )
}

const styles = StyleSheet.create({
  viewStyle:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  viewText: {
    fontSize: 30,
    color: "blue"
  }
})

export default HomeScreen;

