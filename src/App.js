import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";

const ThemeButtons = ({ setTheme }) => {
  return (
    <div className="absolute flex right-8 top-4">
      <ThemeCircle setTheme={setTheme} theme="" bg="bg-red-500" />
      <ThemeCircle setTheme={setTheme} theme="dark" bg="bg-slate-700" />
      <ThemeCircle setTheme={setTheme} theme="purple" bg="bg-purple-500" />
    </div>
  );
};

const ThemeCircle = (props) => {
  return (
    <div
      className={
        "h-8 w-8 mr-4 last:mr-0 rounded-full cursor-pointer " + props.bg
      }
      onClick={() => props.setTheme(props.theme)}
    ></div>
  );
};

function App() {
  const [theme, setTheme] = useState("");

  console.log(theme);

  return (
    <div
      className={
        theme === "dark"
          ? "theme-dark"
          : theme === "purple"
          ? "theme-purple"
          : ""
      }
    >
      <div className="font-nunito text-skin-base bg-gradient-to-r from-skin-hue  h-screen w-screen selection:bg-red-500 selection:text-white">
        <BrowserRouter>
          <NavBar />
          <ThemeButtons setTheme={setTheme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
