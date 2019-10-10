import React, { useEffect, useState } from "react";
import axios from "axios";

import PhotoCont from './PhotoCont';


 function PhotoList() {

const [photo, setPhoto] = useState({});
const [date, setDate] = useState([]);
const [title, setTitle] = useState([]);
const [explanation,setExplanation] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=ZWLD7HPmhALpwuBx8dQfhBxCgarQGE8uMtthChW5`)
      .then(response => {
        console.log(response);
        setPhoto(response.data.url);
        console.log(photo)
        setDate(response.data.date)
        setTitle(response.data.title)
        setExplanation(response.data.explanation)
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);

  return ( 
     

<>
 <PhotoCont photo = {photo} date ={date} title ={title} explanation = {explanation} />





      {/* <div className = "Photo-container">
         {<h1>{title}</h1>}
     { <img className="Nasa-img" alt= "random space img" src= {photo} /> }

        {<h1 className ="date">{date}</h1>}
      </div> */}
      </>
  );
}

export default PhotoList;