import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Favourites from "./components/Favourites";
import Login from "./components/Login";
import Movies from "./components/Movies";
import NavBar from "./components/NavBar";
import axios from "axios";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const API_KEY = 'cc92a66663969e890327e39c0b35cfb7';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

function App() {
  let[watchlist,setWatchList]=useState([])
  let [bannerData, setBannerData] = useState({
    imageUrl: 'https://i.pinimg.com/originals/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg',
    title: 'Avengers Endgame'
  });

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
    localStorage.setItem('moviesApp',JSON.stringify(filteredwatchlist))
  }

  useEffect(()=>{
    let moviesfromloacalstorage=localStorage.getItem('moviesApp')
    if(!moviesfromloacalstorage){
      return
    }
    setWatchList(JSON.parse(moviesfromloacalstorage))
  },[])

  useEffect(() => {
    const fetchBannerData = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=cc92a66663969e890327e39c0b35cfb7`);
        const movies = response.data.results; // Get all movies from the trending list
        if (movies.length > 0) {
          const randomMovie = movies[Math.floor(Math.random() * movies.length)]; // Pick a random movie
          setBannerData({
            imageUrl: `${IMAGE_BASE_URL}${randomMovie.backdrop_path}`,
            title: randomMovie.title
          });
        }
      } catch (error) {
        console.error('Error fetching banner data:', error);
      }
    };

    fetchBannerData(); // Initial fetch
    const interval = setInterval(fetchBannerData, 20000); // Fetch every 60 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

 

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
                <Banner imageUrl={bannerData.imageUrl} title={bannerData.title} /> <Movies watchlist={watchlist} handlewatchlist={handlewatchlist} handleremovewatchlist={handleremovewatchlist} />
              </>
            }
          ></Route>
          <Route path="/watchlist" element={<Favourites watchlist={watchlist} setWatchList={setWatchList} handleremovewatchlist={handleremovewatchlist}/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
