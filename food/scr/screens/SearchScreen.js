import { StyleSheet, Text, View, FlatList } from 'react-native'
import React,{useEffect} from 'react'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'


const SearchScreen = () => {
const [term, setTerm] = React.useState('');
const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter(result => {
      return result.price === price;
    });
  }

    return (
    <View style={styles.container}>
      <SearchBar term={term} onTermChange={setTerm} 
      onTermSubmit={(searchTerm)=>searchApi(searchTerm)} />

      <Text>SearchScreen {term}</Text>
      {errorMessage ? <Text>{errorMessage}</Text>: null}
      <Text>We have found {results.length} results</Text>
      <ResultsList results={filterResultsByPrice('$')} title={'Cost Effective'}/>
      <ResultsList results={filterResultsByPrice('$$')} title={'Cost Effective2'}/>
      <ResultsList results={filterResultsByPrice('$$$')} title={'Cost Effective3'}/>
      {/* <FlatList data={results} keyExtractor={(results)=>results.id}  /> */}
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container:{
    marginTop: 20,
    alignItems: 'center',
    alignContent: 'space-between',
    flex: 1,
    height: '100%',

}
})