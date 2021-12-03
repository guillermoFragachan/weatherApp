

import React from "react";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card'
import { useSelector, useDispatch } from 'react-redux'


function  DisplayToday  () {

  const cityData = useSelector(state=> state.cityWeatherNow)


   
    useEffect(() => {
      console.log(cityData)
      
     },[cityData])
    
    
     return (
       <>
       

  
  {
    cityData.name && 
    <Card>
<Card.Header>Weather Now: {cityData.name}</Card.Header>
    <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        Temperature: {cityData.main.temp}
      </p>
      <p>
        Humidity: {cityData.main.humidity}
      </p>
      <p>
        Pressure: {cityData.main.pressure}
      </p>
      <footer className="blockquote-footer">
        Someone famous in <cite title="Source Title">Source Title</cite>
      </footer>
    </blockquote>
  </Card.Body>
  </Card>
    
  }
  </>

     )
    
    }
    
    export default DisplayToday


