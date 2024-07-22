import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import Deco from "../components/Deco"
import Navigation from "../components/Navigation"

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
        <div style={{backgroundColor:'#171923', height:'100vh'}}>
        <Navbar/>
        <Deco/>
        <Navigation/>
        
        </div>
        </>
    )
}

export default Home