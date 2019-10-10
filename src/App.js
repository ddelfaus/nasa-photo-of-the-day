import React from "react";
import "./App.css";
import PhotoList from './Componets/PhotoComponets/PhotoList';
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from './Componets/NavComponets/NavBar';
import BottomButtons from './Componets/ButtonComponets/bottom-buttons'
import styled from "styled-components";

const BackgroundWrapper = styled.section`
background-color: #8AE1FC;
color: #714955;
`;
function App() {

// axios
// .get(`https://api.nasa.gov/planetary/apod?api_key=ZWLD7HPmhALpwuBx8dQfhBxCgarQGE8uMtthChW5`)
// .then(response => {
//   console.log(response.data);
  
// })
  return (
    <div className="App">
    <NavBar/>
    <BackgroundWrapper>
   <h1 className = "Title">NASA's Picture of the Day!</h1>
    
     <PhotoList /> 

    <BottomButtons/>
    </BackgroundWrapper>
    </div>
  );
}

export default App;
