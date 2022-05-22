import { View, Text, TextInput, StyleSheet } from 'react-native'
import React,{useState} from 'react'

const TextScreen = () => {
  const [writen, setWriten] = useState('')
  return (
    <View>
      <Text style={styles.text}>TEXT SCREEN</Text>
      <TextInput 
      onChangeText={(value)=>setWriten(value)}
      style={styles.input} 
      autoCapitalize='none'
      autoCorrect={false}
      />
      <Text style={styles.text}>{writen} </Text>
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
text:{
  margin:20, 
  padding:20,
 fontSize:45,
color:'purple'
}
})

export default TextScreen