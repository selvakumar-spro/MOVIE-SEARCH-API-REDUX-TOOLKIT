import React, { useState } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import ProfileLogo from '../../images/profilelogo.png'
import { useDispatch } from 'react-redux';
import {  fetchAsyncMovies,fetchAsyncShows } from '../../feature/movies/MovieSlice';

const Header = () => {
   const [term,setTerm]= useState("");
   const disPatch = useDispatch();
   const submitHandler =(e)=>{
    e.preventDefault();
    // console.log(term);
    if(term==="")alert(
      "Please enter search movie"
    )
    disPatch(fetchAsyncMovies(term));
    disPatch(fetchAsyncShows(term));
   
    setTerm("");


   }
  return (
    <div className='header'>
       <div className='logo'> <Link to ="/">
        Movie App</Link>
       </div>
     
     <div className='search-bar'>
        <form onSubmit={submitHandler}>
            <input type="text" value={term} placeholder="Search movies or shows" onChange={(e) => setTerm(e.target.value)}></input>
            <button type ="submit"><i className="fa fa-search"></i></button>
        </form>
     </div>

      <div className='user-image'>
       <img src={ProfileLogo} alt="ProfoileImg"></img>
      </div>
    </div>

  )
}

export default Header;