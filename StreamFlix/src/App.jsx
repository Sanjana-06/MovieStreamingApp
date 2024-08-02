import "./App.css";
import Banner from "./components/Banner";
import Favourites from "./components/Favourites";
import Login from "./components/Login";
import Movies from "./components/Movies";
import NavBar from "./components/NavBar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/Login" element={<Login />}></Route>
          <Route
            path=""
            element={
              <>
                <Banner /> <Movies />
              </>
            }
          ></Route>
          <Route path="/watchlist" element={<Favourites />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
