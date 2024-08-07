import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Favourites from "./components/Favourites";
import Login from "./components/Login";
import Movies from "./components/Movies";
import NavBar from "./components/NavBar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let[watchlist,setWatchList]=useState([])

  let handlewatchlist=(movieObj)=>{
    let newWatchList=[...watchlist,movieObj]
    localStorage.setItem('moviesApp',JSON.stringify(newWatchList))
    setWatchList(newWatchList)
    console.log(newWatchList)
  }

  let handleremovewatchlist=(movieObj)=>{
    let filteredwatchlist=watchlist.filter((movie)=>{
      return movie.id!=movieObj.id
    })
    setWatchList(filteredwatchlist)
  }

  useEffect(()=>{
    let moviesfromloacalstorage=localStorage.getItem('moviesApp')
    if(!moviesfromloacalstorage){
      return
    }
    setWatchList(JSON.parse(moviesfromloacalstorage))
  },[])

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
                <Banner /> <Movies watchlist={watchlist} handlewatchlist={handlewatchlist} handleremovewatchlist={handleremovewatchlist} />
              </>
            }
          ></Route>
          <Route path="/watchlist" element={<Favourites watchlist={watchlist} setWatchList={setWatchList}/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
