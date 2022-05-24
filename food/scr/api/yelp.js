import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer FMkwt9aAajttrgBeUg6AySKijaBaL5W-c4_mwoL0p0rNQKQWmOgJe7fmMgslcvfGfnjskAI982rAbml5sZIzMfAOfMIKZo21dVnXraTpL41Q73m3J4CUu0MPy3OLYnYx'
  }
});

