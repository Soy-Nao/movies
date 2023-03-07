import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../data/httpClient";
import { getMovieImg } from "../utils/getMovieImg";
import "../pages/MovieDetails.css";

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [genero, setGenero] = useState([]);

  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setGenero(data.genres?.[0]);
      console.log(data);
      
    });
  }, [movieId]);
  const imageUrl = getMovieImg(movie.poster_path, 500);
  // console.log(movie.backdrop_path);
  return (
    <div className="detailsContainer">
      <img src={imageUrl} alt={movie.title} className="col movieImage" />
      <div className="col movieDetails">
        <p className="title">
          <strong>Title: </strong>
          {movie.title}
        </p>
        <p>
          <strong>Genre: </strong>
          {
            movie.genres?.map((genre, index) => {
              return(
                genre.name + " || " 
                )
            })
          }
          
        </p>
        <br />
        <p>
          <strong>Year: </strong> {movie.release_date}
        </p>
        <br />
        <p>
          <strong>Duration: </strong>{movie.runtime} minutos
        </p>
        <br />
        <p>
          <strong>Description: </strong>
          {movie.overview}
        </p>
      </div>
    </div>
  );
}
