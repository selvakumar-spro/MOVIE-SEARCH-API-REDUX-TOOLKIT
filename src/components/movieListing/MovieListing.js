import React from 'react';
import "./MovieListing.scss";
import { getAllMovies,getAllShows} from '../../feature/movies/MovieSlice';
import { useSelector } from 'react-redux';
import MovieCard from "../movieCard/MovieCard";
import Slider from "react-slick";
import { Settings } from '../../common/apis/Settings';


const MovieListing = () => {
  


  const movies =useSelector(getAllMovies);
  const shows =useSelector(getAllShows);
  
  let renderMovies,renderShows,renderEpisodes=""
  renderMovies =movies.Response ==="True"?
         (movies.Search.map((movie,index) =>
          <MovieCard key={index} data={movie}/>
         )
        ):(
            <div className='movies-error'>
            <h3>{movies.error}</h3></div>
        );
            // console.log(renderMovies);
 renderShows=shows.Response ==="True"?
         (shows.Search.map((shows,index) =>
          <MovieCard key={index} data={shows}/>)
         ):(
            <div className='movies-error'>
            <h3>{shows.error}</h3></div>
        );
        renderEpisodes =movies.Response ==="True"?
         (movies.Search.map((episode,index) =>
          <MovieCard key={index} data={episode}/>
         )
        ):(
            <div className='movies-error'>
            <h3>{movies.error}</h3></div>
        );
  
  return (
         <div className='movie-wrapper'>
          
           <div className='movie-list'>
              <h2>Movies</h2>
              <div className='movie-container'>
                 <Slider {...Settings}>{renderMovies}</Slider>
              </div>
           </div>
           
           <div className='show-list'>
              <div>{shows.Response==="True"?(<h2>Shows</h2>):(<h2>There is No Default Shows Please Search and Get Shows</h2>)}</div>
               <div className='movie-container'>
                 <Slider {...Settings}>{renderShows}</Slider>
              </div>
           </div>
          
         
         </div>
        )
     }

export default MovieListing;