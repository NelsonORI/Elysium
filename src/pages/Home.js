import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"


function Home () {
  const [movie,setMovie] = useState([])
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=')
    .then(res => res.json())
    .then(data => setMovie(data.results))
  },[])
  console.log(movie);
    return (
        <>
        <Navbar/>
          <h1 className="">Welcome to the Home Page</h1>
        </>
    )
}

export default Home