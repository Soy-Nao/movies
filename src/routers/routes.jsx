import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import Prueba from "../components/prueba";
import  {LandingPage}  from "../pages/LandingPage";
import { MovieDetails } from "../pages/MovieDetails";
export function MyRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/prueba" element={<Prueba />}/>
        <Route exact path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </HashRouter>
  );
}
