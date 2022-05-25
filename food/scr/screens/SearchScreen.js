import { StyleSheet, Text, View, FlatList } from 'react-native'
import React,{useEffect} from 'react'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'
import {ScrollView} from 'react-navigation'

const SearchScreen = () => {
const [term, setTerm] = React.useState('');
const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter(result => {
      return result.price === price;
    });
  }

    return (
    <>
      <SearchBar term={term} onTermChange={setTerm} 
      onTermSubmit={({term})=> searchApi(term)} />

      <View style={{ marginHorizontal:15 }}>
      <Text>SearchScreen {term}</Text>
      {errorMessage ? <Text>{errorMessage}</Text>: null}
      <Text>We have found {results.length} results</Text>
      </View>

      <ScrollView>
      <ResultsList results={filterResultsByPrice('$')} title={'Cost Effective'}/>

      <ResultsList results={filterResultsByPrice('$$')} title={'Cost Effective2'}/>

      <ResultsList results={filterResultsByPrice('$$$')} title={'Cost Effective3'}/>
      </ScrollView>
    </>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container:{
    marginTop: 20,
    flex: 1,
}
})