import React from "react";
import { useEffect, useState } from "react";
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from "react-bootstrap/FormControl"
import { useSelector, useDispatch } from 'react-redux'
import {addCityWeatherNow} from "../Store/Actions"



function  SearchBox  () {



const dispatch = useDispatch()

//  const getCityWeather = async (query) =>{

//     const url = `http://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=42ba95e0cc8ebb412850c98bf451b271`
//     const response = await fetch(url)
//     if(response.ok){
//         const data = await response.json()
       

//         setCity(data)
//         console.log(city)
        


//     }else{
//         console.log('error')
//     }

     
//  }

   
    useEffect(() => {
        
        
     },[])
    
    
     return (
        <>
        <InputGroup onChange={(e)=>{
            
            dispatch(addCityWeatherNow(e.target.value))
            
        }} className="mb-3">
        
          <FormControl  aria-describedby="basic-addon1" />
        </InputGroup>
      
      
      </>
     )
    
    }
    
    export default SearchBox