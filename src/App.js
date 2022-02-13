import "./App.css";
import "./countrylist.css";
import './countrydetails.css';
import useLocalStorage from "use-local-storage";
import light_mode from "./media/light-mode.png";
import dark_mode from "./media/night-mode.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountryList from "./components/CountryList";
import CountryDetail from "./components/CountryDetail";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <Router>
      <div className="App" data-theme={theme}>
        <header>
          <h3>Where in the world?</h3>
          <button onClick={switchTheme}>
            <img src={theme === "light" ? dark_mode : light_mode} />
            {theme === "light" ? "Dark" : "Light"} Mode
          </button>
        </header>

        <Routes>
          <Route path="/" element = {<CountryList />}></Route>
          <Route path="/country" element = {<CountryDetail />}></Route>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
