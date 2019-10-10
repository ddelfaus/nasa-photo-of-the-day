import React from "react";




const PhotoCont = props => {
   
   
   
   
 return (


    <div className ="photo-container">

        
     
      <h1>{props.title}</h1>
    <img className="Nasa-img" alt= "random space img" src= {props.photo} /> 

     <h1 className ="date">{props.date}</h1>
        </div>
   


 

    )
}
export default PhotoCont;