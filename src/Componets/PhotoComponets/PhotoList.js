import React, { useEffect, useState } from "react";
import axios from "axios";



 function PhotoList() {

const [photo, setPhoto] = useState({});
const [date, setDate] = useState([])
const [title, setTitle] = useState([])
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=ZWLD7HPmhALpwuBx8dQfhBxCgarQGE8uMtthChW5`)
      .then(response => {
        console.log(response);
        setPhoto(response.data.url);
        console.log(photo)
        setDate(response.data.date)
        setTitle(response.data.title)
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);

  return ( 
     
      <div className = "Photo-container">
         {<h1>{title}</h1>}
     { <img className="Nasa-img" alt= "random space img" src= {photo} /> }

        {<h1 className ="date">{date}</h1>}
      </div>
   
  );
}

export default PhotoList;