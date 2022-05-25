import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ResultDetail = ({result}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: result.image_url}}></Image>
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.rating}>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  )
}

export default ResultDetail

const styles = StyleSheet.create({
container:{
  marginLeft: 15,
},
image:{
  width: 250,
  height: 100,
  borderRadius:4,
},
name:{
fontWeight: 'bold',
fontSize: 14,

},
rating:{
  color: 'gray',
}
})