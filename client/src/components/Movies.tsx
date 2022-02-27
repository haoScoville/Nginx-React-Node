import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "../declarations/Movie";

const Movies = () => {
    const [movies, setMovies] = useState<Movie[]>([])

    const getMovie = async () => {
        const response = await axios.get<Movie[]>("https://www.my-example-api.localhost/movies")
        const movies = response.data
        setMovies(movies)
    }
    
    useEffect(() => {
        getMovie()
    }, [])
    
    return (
        <div>
            {
                movies.map(movie => 
                    <div key={movie.title}>
                        {movie.title}
                    </div>
                )
            }
        </div>
    )
} 

export default Movies;
