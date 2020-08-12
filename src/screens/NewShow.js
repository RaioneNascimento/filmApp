import React, { useState, useContext } from "react";
import { View, StyleSheet, Button } from "react-native";
import Input from "../components/form/Input";
import { AppContext } from "../context/AppContext";

const NewShowScreen = () => {
  const [stateName,setStateName] = useState("");
  const [stateNetwork,setStateNetwork] = useState("");
  const [stateCountry,setStateCountry] = useState("");
  const [stateThumbNail,setStateThumbNail] = useState("");
  const {dispatch} = useContext(AppContext);

  const salvar = () => {
    const action ={
      type: "addItem",
      payload: {
        name: stateName,
        netWork: stateNetwork,
        country: stateCountry,
        image_thumnail_path: stateThumbNail
      }
    };
    dispatch(action);
  }

  return (
    <>
      <View style={styles.viewStyle}>
        <Input label={"Name"} initialValue={""} onChange={(text) => setStateName(text)} />
        <Input label={"Network"} initialValue={""} onChange={(text) => setStateNetwork(text)} />
        <Input label={"Country"} initialValue={""} onChange={(text) => setStateCountry(text)} />
        <Input label={"ThumbNail"} initialValue={""} onChange={(text) => setStateThumbNail(text)} />

        <Button title={"Salvar"} onPress={() => salvar()} />
      </View>
    </>
  )
}

const styles = StyleSheet.create ({
  viewStyle: {
    marginTop: 30
  }
})

export default NewShowScreen;