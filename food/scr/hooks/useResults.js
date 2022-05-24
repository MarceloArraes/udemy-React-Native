import React, {useState,useEffect} from 'react';
import yelp from '../api/yelp';

export default () => {
const [results, setResults] = useState([]);
const [errorMessage, setErrorMessage] = useState('');

const searchApi = async (searchTerm) => {
  console.log('searchApi2', searchTerm);
  try{
  const response = await yelp.get('/search', {
    params: {
      limit: 10,
      searchTerm,
      location: 'san jose'
    }
  });

  setResults(response.data.businesses);
  } catch(err){
    console.log(err);
    setErrorMessage('Something went wrong');
  }
};

  useEffect(() => {
    searchApi('pasta');
  
    return () => {
      console.log('cleanup');
    }
  }, []);

return [searchApi, results, errorMessage];

}