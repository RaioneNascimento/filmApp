import React, { useState } from "react";
import { StyleSheet, TextInput, Text } from "react-native"

const GenericInput = (props) => {
  const [stateValor, setStateValor] = useState(props.initialValue);

  const onChange = (text)=>{
    setStateValor(text);
    if (props.onChange)
      props.onChange(text);
  }

  return(
    <TextInput 
      value={stateValor} 
      style={props.style} 
      onChangeText={onChange}/>
  )
}

export default GenericInput;