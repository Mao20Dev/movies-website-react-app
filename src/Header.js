import React from "react";
import Image from './assets/main.jpg';



export default function Header (){
    const [rated,setRated] = React.useState({});

    React.useEffect(() => {
      // declare the async data fetching function
    const fetchData = async () => {
        // get the data from the api
        const data = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=18255614d869c9bfc1532181aa040cd1&language=en-US&page=1`);
        // convert the data to json
        const json = await data.json();
    
        // set state with the result
        setRated(json);
    }
    
      // call the function
    fetchData()
        // make sure to catch any error
        .catch(console.error);;
    }, [])
    console.log(rated);
    try{
        var elementsRated = rated.results.map(elements =>{
            return(
                <div className="movie-container">
                        <img src={"https://www.themoviedb.org/t/p/w220_and_h330_face"+elements.poster_path} alt="" className="movie-poster"/>
                        <div className="info-container">
                            <h2 className="movie-name">{elements.title}</h2>
                            <h4 className="movie-rate">{elements.vote_average}</h4>
                        </div>
                </div>
            )
        })
    }catch{
        console.log("header api not found");
    }
    

    return(
        <div className="main-header">
            <header className="header">Movies</header>
            <div className="blur-background"></div>
            <img src={Image} alt="" className="background-main"/>
            <div className="recommend">Películas Recomendadas</div>
            <div className="recommend-movies">
                {elementsRated}
            </div>
        </div>
    )
}

