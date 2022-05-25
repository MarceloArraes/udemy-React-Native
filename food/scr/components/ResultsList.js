import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import ResultDetail from './ResultDetail'
import { withNavigation } from 'react-navigation'

const ResultsList = ({title, results, navigation}) => {
  if(results.length === 0) return null;


  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{results.length}</Text>
      <FlatList data={results}
      keyExtractor={(result)=>result.id}
      horizontal={true}
      renderItem={({item})=>{
        return (
          <TouchableOpacity onPress={()=> navigation.navigate('ResultsShow', {id: item.id})}>
        <ResultDetail result={item} />
        </TouchableOpacity>)
      }}
      showsHorizontalScrollIndicator={false}
    />
    </View>
  )
}

export default withNavigation(ResultsList)

const styles = StyleSheet.create({
title:{
  marginHorizontal: 15,
  fontSize: 18,
  fontWeight: 'bold',
}
})