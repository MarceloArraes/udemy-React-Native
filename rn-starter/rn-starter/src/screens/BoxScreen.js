import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Child #1</Text>
      <Text style={styles.textStyle}>Child #2</Text>
      <Text style={styles.textStyle}>Child #3</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  viewStyle:{
  borderWidth:2,
  borderColor:'black',
  alignItems:'flex-start',
  flexDirection:'row'
},
textStyle:{
  borderWidth:2,
  borderColor:'red',
  margin:20
}
})

export default BoxScreen