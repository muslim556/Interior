import React from "react";
import "./Index.css";
import "./Media.css";
import { Navbar } from "./Components/Navbar";
import { Header } from "./Pages/Header";
import { Section1 } from "./Pages/Section1";
import { Section2 } from "./Pages/Section2";
import { Section3 } from "./Pages/Section3";
import { Section4 } from "./Pages/Section4";
import { Section5 } from "./Pages/Section5";
import { Section6 } from "./Pages/Section6";
import { Footer } from "./Components/Footer";
import { Link } from "./Pages/Link";
// import SimpleSlider from "./Pages/Karusel";



export function App() {
  return (
    <React.StrictMode>
      <Navbar />
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
      <Link />
      {/* <SimpleSlider /> */}
    </React.StrictMode>
  );
}
