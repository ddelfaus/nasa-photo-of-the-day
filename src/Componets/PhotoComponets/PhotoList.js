import React, { useEffect, useState } from "react";
import axios from "axios";



 function PhotoList() {

const [photo, setPhoto] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=ZWLD7HPmhALpwuBx8dQfhBxCgarQGE8uMtthChW5`)
      .then(response => {
        console.log(response);
        setPhoto(response.data.url);
        console.log(photo)
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);

  return ( 
      <div className = "Photo-container">
   
     { <img ClassName="Nasa-img" alt= "random space img" src= {photo} /> }


      </div>
   
  );
}

export default PhotoList;