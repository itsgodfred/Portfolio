import { useState, createContext, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";

export const navContext = createContext();

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [navstate, setNavstate] = useState(true);

  return (
    <div className="relative flex flex-col gap-2 font-text text-[#0E1A2B] flex-1 overflow-clip">
      <span className="absolute -left-15 -top-20 h-40 w-40 blur-[84px] bg-[#1F4FD1]"></span>
      <span className="absolute left-[43%] top-[15%] h-40 w-40 blur-[94px] bg-[#1F4FD1]"></span>
      <span className="absolute -right-40 top-[18%] h-40 w-40 blur-[84px] bg-[#1F4FD1]"></span>
      <span className="absolute left-[43%] top-[40%] h-40 w-40 blur-[84px] bg-[#1F4FD1] -z-10"></span>
      <span className="absolute left-[43%] -bottom-40 h-40 w-40 blur-[84px] bg-[#1F4FD1] -z-10"></span>
      <navContext.Provider
        value={{
          navstate,
          setNavstate,
        }}
      >
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </navContext.Provider>
    </div>
  );
}

export default App;
