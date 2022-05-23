import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Child #1</Text>
      <Text style={styles.textStyle2}>Child #2</Text>
      <Text style={styles.textStyle}>Child #3</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  viewStyle:{
  flexDirection:'row',
  alignItems: 'flex-start',
  justifyContent: 'space-evenly',
  height: 100,
  borderWidth: 2,
  borderColor: 'black'
},
textStyle:{
  borderWidth: 2,
  borderColor: 'red',
  backgroundColor: 'green',

  color: 'white',
  padding: 10,
  height: 50,
  alignItems: 'center'
},
textStyle2:{
  borderWidth: 2,
  borderColor: 'red',
  backgroundColor: 'green',

  color: 'white',
  padding: 10,
  height: 50,
  alignItems: 'center',
  alignSelf: 'flex-end'
},

})

export default BoxScreen