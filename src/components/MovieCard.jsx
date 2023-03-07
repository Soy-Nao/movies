import style from "../components/MovieCard.module.css";
import { Link } from "react-router-dom";
export function MovieCard({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className={style.movieCard}>
      <Link to={"/movies/" + movie.id}>
      <div className={style.average}>{movie.vote_average}</div>
        <img
          width={230}
          height={345}
          src={imageUrl}
          alt={movie.title}
          className={style.movieImage}
        />
        
      </Link> 
      
      <div className={style.title}>{movie.title}</div>
    </li>
  );
}
