import React, { useEffect } from 'react';
import MovieListing from "../movieListing/MovieListing";
import { useDispatch } from 'react-redux';
import {fetchAsyncMovies,fetchAsyncShows} from '../../feature/movies/MovieSlice';

const Home = () => {
  
  let dispatch =useDispatch();
  useEffect(() =>{
        dispatch(fetchAsyncMovies());
        dispatch(fetchAsyncShows());
       
        
      },[dispatch])

  return (
    
    <div>
       <div className='banner-img'></div>
       <MovieListing/>
    </div>
  
    
  )
}

export default Home;