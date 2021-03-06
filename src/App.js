import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React WeatherApp</h1>
        <div className="container">
          <Search unit="metric" />
        </div>
      </header>
    </div>
  );
}

export default App;
