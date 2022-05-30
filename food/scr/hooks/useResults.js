import React, {useState,useEffect} from 'react';
import yelp from '../api/yelp';

export default () => {
const [results, setResults] = useState([]);
const [errorMessage, setErrorMessage] = useState('');

const searchApi = async (term) => {
  console.log('term of searchApi', term);
  try{
  const response = await yelp.get('/search', {
    params: {
      limit: 50,
      term,
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
    searchApi('grocery');
  
  }, []);

return [searchApi, results, errorMessage];

}