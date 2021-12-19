import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Search from "./Search";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React WeatherApp</h1>
        <div className="container">
          <Search unit="metric" />
          <Forecast />
        </div>
      </header>
    </div>
  );
}

export default App;
