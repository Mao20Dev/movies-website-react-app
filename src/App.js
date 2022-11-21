import './App.css';
import React from "react";

import Header from "./Header";



function App() {
  const [movies, setMovies] = React.useState({})
  const [count, setCount] = React.useState(1);

    React.useEffect(() => {
      // declare the async data fetching function
    const fetchData = async () => {
        // get the data from the api
        const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=18255614d869c9bfc1532181aa040cd1&language=en-US&page=${count}`);
        // convert the data to json
        const json = await data.json();
    
        // set state with the result
        setMovies(json);
    }
    
      // call the function
    fetchData()
        // make sure to catch any error
        .catch(console.error);;
    }, [count])
    console.log(movies)
    // try{
    // var movieElements = movies.results.map(movie => {
    //     return (
    //     <div className="movies">
    //         <img src={"https://www.themoviedb.org/t/p/w220_and_h330_face"+movie.results.poster_path} alt="" className="movie-poster"/>
    //         <div className="info-container">
    //             <h2 className="movie-name">{movie.title}</h2>
    //             <h4 className="movie-rate">{movie.vote_average}</h4>
    //         </div> 
    //     </div>
    //     )})}
    //     catch{
    //         console.log("movies api not found")
    //     }
    
    try{
      var moviesData = movies.results.map(movie => {
        return(
          <div className="movie-container-main" onClick={(()=> console.log(movie.title))}>
              <img src={"https://www.themoviedb.org/t/p/w220_and_h330_face"+movie.poster_path} alt="" className="movie-poster"/>
              <div className="info-container">
                  <h2 className="movie-name">{movie.title}</h2>
                  <h4 className="movie-rate">{movie.vote_average}</h4>
              </div>
          </div>
        )
      })  
    }catch{
      console.log("Nada")
    }
    
  return (
    <div className="App">

      <Header />

      <div className="movies-container">
            <div className="recommend-from-movies">Novedades</div>
            <div className='mainbox'>
              {moviesData}
              <div className='button-container'>
                <button onClick={()=>{setCount(prevCount => prevCount - 1)}} className="page-button page-button-back">Atrás</button>
                <button onClick={()=>{setCount(prevCount => prevCount + 1)}} className="page-button page-button-forward">Adelante</button>
              </div>
              
            </div>
            
      </div>

      
    </div>
  );
}

export default App;