export const ADD_TO_CITY_WEATHER_NOW = 'ADD_TO_CITY_WEATHER_NOW'
export const ADD_TO_CITY_WEATHER_FORECAST = 'ADD_TO_CITY_WEATHER_FORECAST'



export const addCityWeatherNowNot = (city) => ({
  type: ADD_TO_CITY_WEATHER_NOW,
  payload: city
})

export const addCityWeatherForecast = (query) => {
  return async (dispatch) => {
    
    try {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=42ba95e0cc8ebb412850c98bf451b271`
    const response = await fetch(url)

      if (response.ok) {
        const data = await response.json()
        // now it's time do to the dispatch
      
        dispatch({
          type: ADD_TO_CITY_WEATHER_FORECAST,
          payload: data,
        })

      }
        
       
    } catch (error) {
      console.log(error)
     
    }
}
}


export const addCityWeatherNow = (query) => {
  return async (dispatch) => {
    
    try {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=42ba95e0cc8ebb412850c98bf451b271`
    const response = await fetch(url)

      if (response.ok) {
        const data = await response.json()
        // now it's time do to the dispatch
      
        dispatch({
          type: ADD_TO_CITY_WEATHER_NOW,
          payload: data,
        })

      }
        
       
    } catch (error) {
      console.log(error)
     
    }
}
}