import logo from "./logo.svg";
import { Mat } from "./component/mat";
import Pat from "./component/pat";
import Counter from "./component/counter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Mat />

        <Pat patLink="https://reactjs.org" />
        <span
        // className="App-link"
        // href="https://reactjs.org"
        // target="_blank"
        // rel="noopener noreferrer"
        >
          learn react
        </span>

        <Counter />
      </header>
    </div>
  );
}

export default App;
