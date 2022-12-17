import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import {APIkey} from "../../common/apis/movieApiKey";

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',async(term) =>{
    // const movieText = "spider";
    const response = await movieApi.get(`?apikey=${APIkey}&s=${term}&type=movie`);
    
    return (response.data);
});
export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows',async(term) =>{
    // const seriesText = "friends";
    const response = await movieApi.get(`?apikey=${APIkey}&s=${term}&type=series`);
    
    return (response.data);
    
});
// export const fetchAsyncEpisodes=createAsyncThunk('episodes/fetchAsyncEpisodes' ,async(term) =>{
//     const response = await movieApi.get(`?apikey=${APIkey}&s=${term}&type=episode`);
//     return (response.data);
// })
  
export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowsDetail',async(id) =>{
    
    const response = await movieApi.get(`?apikey=${APIkey}&i=${id}&Plot=full`);
    
    return (response.data);
});
    

    


const initialState ={
    movies:{},
    shows:{},
    episodes:{},
    selectedMovieOrShow:{}
}

const MovieSlice =createSlice({
    name:"moviess",
    initialState,
    reducers:{
        // addMovies :(state ,{payload} )=>{
        //      state.movies=payload;
        // },
        removeSelectedMovieOrShow:(state) =>
          state.selectedMovieOrShow={}

    },
    extraReducers:{
        [fetchAsyncMovies.pending]:() =>{
            console.log("pending")
        },
        [fetchAsyncMovies.fulfilled]:(state,{payload}) =>{
            console.log("fetch Successully");
            return {...state,movies:payload}
        },
        [fetchAsyncMovies.rejected]:() =>{
            console.log("rejected")
        },
        [fetchAsyncShows.fulfilled]:(state,{payload}) =>{
            console.log("fetch Successully");
            return {...state,shows:payload}
        },
       
        [fetchAsyncMovieOrShowDetail.fulfilled]:(state,{payload}) =>{
            console.log("fetch Successully");
            return {...state,selectedMovieOrShow:payload}
        }
    }
})

// export const {addMovies} = MovieSlice.actions;
export const {removeSelectedMovieOrShow} = MovieSlice.actions;
export default MovieSlice.reducer;
export const getAllMovies =(state) =>state.moviess.movies;
export const getAllShows =(state) =>state.moviess.shows;
export const getAllEpisodes=(state) =>state.moviess.episodes;
export const getSelectedMovieOrShow =(state) =>state.moviess.selectedMovieOrShow;
