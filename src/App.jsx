import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Works from "./components/Works";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Home />
      <Works />
      <Contact />
      <About />
    </>
  );
}

export default App;
