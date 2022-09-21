import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";
import Footer from "./components/Footer/Footer";
import { startTransition, useRef } from "react";
import Favorites from "./components/Favorites/Favorites";
import BarLounge from "./components/BarLounge/BarLounge";
import MainDivider from "./components/MainDivider/MainDivider";

function App() {
  const scrollRef = useRef();
  const scrollTo = () => {
    scrollRef.current.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Hero scrollTo={scrollTo} />
        <Intro refProp={scrollRef} />
        <Favorites />
        <BarLounge />
        <MainDivider />
        <Routes>
          <Route path="/"></Route>
          <Route path="/reservations" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
