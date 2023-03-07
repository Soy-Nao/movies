import "./App.css";
import { MyRoutes } from "./routers/routes";
import { Link }from "react-router-dom";
function App() {
  return (
    <div>
      <header>
        <Link to={"/Prueba"}>
          <h1 className="title">🎬 Movies</h1>
        </Link>
      </header>
      <MyRoutes />
    </div>
  );
}

export default App;
