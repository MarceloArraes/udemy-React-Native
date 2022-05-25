import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React,{useEffect, useState} from 'react'
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const id = navigation.getParam('id');

  const getResult = async (id) => {
    await yelp.get(`/${id}`).then(response => {
      setResult(response.data);
    }).catch(err => {
      console.log(err);
    });
  };

  useEffect(() => {
    setLoading(true);
    getResult(id);
  

      setLoading(false);
    
  }, [])
  
if(!result)return null;

  return (
    <View>
      {loading ? <Text>Loading...</Text> : <Text>{result.name}  {id}</Text>}
      <FlatList 
      data={result.photos}
      keyExtractor={(photo)=>photo}
      renderItem={({item})=>{
        return (<Image source={{ uri: item}} style={styles.image} />)
      }} />
    </View>
  )
}

export default ResultsShowScreen

const styles = StyleSheet.create({
image:{
  width: 300,
  height: 200,
  borderRadius: 4,
  marginLeft: 15,
  marginBottom: 5,
}
})