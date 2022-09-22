import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRef } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage/Homepage";
import Reservations from "./pages/Reservations/Reservations";

function App() {
  const scrollRef = useRef();
  const resScrollRef = useRef();
  const scrollTo = () => {
    scrollRef.current.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  const resScrollTo = () => {
    resScrollRef.current.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Homepage scrollTo={scrollTo} scrollRef={scrollRef} />}
          ></Route>
          <Route
            path="/reservations"
            element={
              <Reservations
                resScrollRef={resScrollRef}
                resScrollTo={resScrollTo}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
