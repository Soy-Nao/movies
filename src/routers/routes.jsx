import "../App.css";
import { BrowserRouter as Router, Routes, Route, HashRouter, Link } from "react-router-dom";
import  {LandingPage}  from "../pages/LandingPage";
import { MovieDetails } from "../pages/MovieDetails";
export function MyRoutes() {
  return (
    <div className="routes">
     
      <HashRouter> <header>
        <Link className="link" to={"/"}>
          <h1 className="title">🎬 Movies</h1>
        </Link></header>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/movies/:movieId" element={<MovieDetails />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
