import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const ResultsList = ({title, results}) => {



  return (
    <View>
      <Text>{title}</Text>
      <FlatList data={results}  
      keyExtractor={(result)=>result.id}
      horizontal={true}
      renderItem={({item})=>{
        return <Text>{item.name}</Text>
      } }
    />
    </View>
  )
}

export default ResultsList

const styles = StyleSheet.create({
title:{
  fontSize: 18,
  fontWeight: 'bold',
}
})