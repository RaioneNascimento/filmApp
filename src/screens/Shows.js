import React from "react";
import { View, StyleSheet } from "react-native";

const ShowsScreen = () => {
  return (
    <>
      <View style={styles.parentStyle}>
        <View style={styles.listStyle}>
          <ShowList />
        </View>
        <View style={styles.detailStyle}>
          <ShowDetail /> 
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create ({
  parentStyle:{
    flex: 1,
    marginTop: 25

  },
  listStyle:{
    backgroundColor: "blue",
    flex: 2
  },
  detailStyle:{
    backgroundColor: "yellow",
    flex: 1
  }
})

export default ShowsScreen;