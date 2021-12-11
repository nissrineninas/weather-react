import "./App.css";
import Search from "./Search";
import Display from "./Display";
import Weather from "./Weather";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React WeatherApp</h1>
        <div className="container">
          <Search />
          <Display />
          <Weather />
          <Forecast />
        </div>
      </header>
    </div>
  );
}

export default App;
