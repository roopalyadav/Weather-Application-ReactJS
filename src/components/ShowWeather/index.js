import React from "react";
import { Card } from "react-bootstrap";

const ShowWeather = ({weather, msg, city}) => {
   
  
  if(!city)
  {
      msg.title="City";
      msg.tempe="";
      msg.desc="";
  }
   
    
  return (
    <Card  style={{ width: "18rem", margin: "3px auto", borderRadius:"10px", }} >
    <Card.Body>
      <Card.Title><h3> {msg.title}</h3></Card.Title>

      <Card.Text>
      
       <span>Temperature: {msg.tempe} <br/>
           Description: {msg.desc}</span>
      </Card.Text>
    </Card.Body>
  </Card>
    
  );
};

export default ShowWeather;
