import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Content from "./components/Content";

const API_KEY="uHcwwE10wIdKxQd1qHXYbJjPVOKL1yVyXfTxtAWV"

function App() {

  const [nasaverisi, setNasaverisi] = useState(null);
  const [date,setDate]=useState(new Date().toISOString().slice("T")[0]);


  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=",{
      params:{api_key:API_KEY,date:date}
    }).then((data) => {
      console.log(data.data);
      setNasaverisi(data.data);
    }).catch(err => console.log(err))
  }, []);

  useEffect(()=>{ 
    document.title="Astronomy Picture of the Day" 
  }, [])

  return (
    <div className="App">
      <input 
      type='date'
      onChange={(e)=>setDate(e.target.value)}
      value={date}s
      />
      <h1>Astronomy Picture of the Day</h1>
      <p>Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</p>
      <Content nasaverisi={nasaverisi}/>
      
    </div>
  );
}

export default App;
