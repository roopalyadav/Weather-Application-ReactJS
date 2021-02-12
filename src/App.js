import React ,{useState}from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import CreateInput from './components/CreateInput';
import ShowWeather from './components/ShowWeather';

function App() {
  const[city, setCity]=useState("");
  
  const[msg,setMsg]=useState({title:"City", tempe:"", desc:""})
  
  const fetchCityWeather=()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=40c34732ced6957420958df85b090a64`)
    .then((response)=>response.json()).then((result)=>{
      console.log(result);
      
      setMsg({title:result.name, tempe:result.main.temp, desc:result.weather[0].description})
     
     
    }).catch((error)=>{
      console.log(error);
      setMsg({title:"Not found", tempe:error.cod, desc:null});
    })
  }
  return (
    <>
    <Container>
      <h1 style={{textAlign:"center"}}>Weather App</h1>
      <CreateInput city={city} setCity={setCity} fetchCityWeather={fetchCityWeather}/>
      <ShowWeather msg={msg} city={city}/>
      
      </Container>
    
   
    </>
  );
}

export default App;
