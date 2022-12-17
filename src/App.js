import React from 'react';
import './App.scss';
import { Route,Routes} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import MovieDetail from './components/movieDetail/MovieDetail';
import PageNotFound from './components/pageNotFound/PageNotFound';
// import MovieCard from './components/MovieCard/MovieCard';
import Footer from './components/footer/Footer';


function App() {
  return (
   <div className="app">
     <Header></Header>
      <div className='container'>
         <Routes>
           <Route path='/' element={<Home/>}></Route>
           <Route path='/movie/:imDbID' element={<MovieDetail/>}></Route>
           <Route element={<PageNotFound/>}></Route>
        </Routes>
      </div>
     <Footer></Footer>
    </div>
  );
}

export default App;
