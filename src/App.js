import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import MoviesList from "./components/MoviesList/MoviesList";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="list">
        <MoviesList />
      </div>
    </div>
  );
}

export default App;
