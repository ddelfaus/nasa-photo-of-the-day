import React from "react";

import styled from "styled-components";

const Wrapper = styled.section` 
margin: .5% 5%;


`;
const TextWrapper = styled.section`
margin-top: 1%;
`;
const PhotoCont = props => {
   
   
   
   
 return (


    <div className ="photo-container">

       <Wrapper>
      <h3 className ="date">{props.date}</h3>
      <h3>{props.title}</h3>
      <img className="Nasa-img" alt= "random space img" src= {props.photo} /> 
      <TextWrapper>
      <p>{props.explanation}</p>
      </TextWrapper>
      </Wrapper> 
    </div>
   


 

    )
}
export default PhotoCont;