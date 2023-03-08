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
  const [trailers, setTrailers] = useState([]);
  const [tra, setTra] = useState([]);
  const [credits, setCredits] = useState([]);
  const [cre, setCre] = useState([]);

  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setGenero(data.genres?.[0]);
      console.log(data);
    });

    get("/movie/" + movieId + "/videos").then((data) => {
      setTrailers(data);
      setTra(data.genres?.[0]);
      console.log(data);
    });

    get("/movie/" + movieId + "/credits").then((data) => {
      setCredits(data);
      setCre(data.cast?.[0]);
      console.log(data);
    });
  }, [movieId]);
  const imageUrl = getMovieImg(movie.poster_path, 500);
  const trailer = trailers.results?.find(
    (trailer) => trailer.type === "Trailer"
  );
  // console.log(movie.backdrop_path);
  return (
    <div className="detailsContainer">
      <img src={imageUrl} alt={movie.title} className="movieImage" />
      <div className="col movieDetails">
        <p className="title">
          <strong>Title: </strong>
          {movie.title}
        </p>
        <p>
          <strong>Genre: </strong>
          {movie.genres?.map((genre, index, arr) => {
            return genre.name + (index < arr.length - 1 ? " || " : ".");
          })}
        </p>
        <br />
        <p>
          <strong>Year: </strong> {movie.release_date}
        </p>
        <br />
        <p>
          <strong>Duration: </strong>
          {movie.runtime} minutos
        </p>
        <br />
        <p>
          <strong>Cast: </strong>
          {credits.cast?.map((credit, index) => {
            return index < 10 ?(credit.name + ((index < 9) ? ", " : ". " )): "";
          })}
        </p>
        <br />
        <p>
          <strong>Description: </strong>
          {movie.overview}
        </p>
          <br />
        <p>
          <strong>Trailer:</strong>
        </p>
        <div className="responsiveContent">
          <iframe
            //frameborder="0"
            src={`https://www.youtube.com/embed/${trailer?.key}`}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
