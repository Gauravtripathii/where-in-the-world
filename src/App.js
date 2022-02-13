import "./App.css";
import useLocalStorage from "use-local-storage";
import light_mode from "./media/light-mode.png";
import dark_mode from "./media/night-mode.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
    <div className="App" data-theme={theme}>
      <header>
        <h3>Where in the world?</h3>
        <button onClick={switchTheme}>
          <img src={theme === "light" ? dark_mode : light_mode} />
          {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </header>
    </div>
  );
}

export default App;
