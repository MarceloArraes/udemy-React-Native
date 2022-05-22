import { View, Text, TextInput, StyleSheet } from 'react-native'
import React,{useState} from 'react'

const TextScreen = () => {
  const [password, setPassword] = useState('')

  const validPassword = () => {
    //let pattern = 
    if(password.length>5) return false;
      else return true;
    //if(passwo)
}

  return (
    <View>
      <Text style={styles.title}>TEXT SCREEN</Text>
      <TextInput 
      onChangeText={(value)=>setPassword(value)}
      style={styles.input} 
      autoCapitalize='none'
      autoCorrect={false}
      />
      {validPassword() ? 
<Text style={styles.text}>{password} </Text>:
<Text style={styles.text}>This Password is invalid</Text>}

          </View>
        )
      }

const styles = StyleSheet.create({
input: {
  margin:15,
  borderColor: 'gray',
  borderWidth:2,
  padding: 10,
},
title:{
  color: 'gray',
  fontSize: 20,
  margin:10,
},
text:{
  margin:10,  
  padding:10,
 fontSize:45,
color:'purple'
}
})

export default TextScreen