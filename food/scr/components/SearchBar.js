import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {


  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.icon}/>
      <TextInput
      autoCapitalize='none'
      autoCorrect={false}
      style={styles.inputStyle}
      placeholder='Search'
      placeholderTextColor={'#ccc'}
      value={term}
      onChangeText={onTermChange}
      onEndEditing={onTermSubmit}
      />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  backgroundStyle: {
    marginBottom: 10,
    marginTop: 25,
    flexDirection: 'row',
    backgroundColor: '#ccc',
    borderColor: 'black',
    height: 50,
    borderWidth:1,
    borderRadius: 5,
    marginHorizontal: 15,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
},
  inputStyle:{
    fontSize: 18,
    marginLeft: 55,
    height: '100%',
    flex: 1,
  },
  icon: {
    alignSelf:'flex-start',
    justifyContent: 'center',
    position: 'absolute',
    marginTop: 8,
    left: 10,
    fontSize: 35,
    color: '#000',
  }
})