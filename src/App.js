import React from "react";
import "./App.css";
import PhotoList from './Componets/PhotoComponets/PhotoList'
import axios from "axios";
import { useEffect, useState } from "react";



function App() {

// axios
// .get(`https://api.nasa.gov/planetary/apod?api_key=ZWLD7HPmhALpwuBx8dQfhBxCgarQGE8uMtthChW5`)
// .then(response => {
//   console.log(response.data);
  
// })
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀! a
      </p>
    <PhotoList />
    </div>
  );
}

export default App;
