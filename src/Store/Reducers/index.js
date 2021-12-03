import { initialState } from '../index.js'
import { ADD_TO_CITY_WEATHER_NOW } from '../Actions/index.js'



const mainReducer = (state = initialState, action) => {
  switch (action.type) {
      case ADD_TO_CITY_WEATHER_NOW:
          return{
              ...state,
              cityWeatherNow: action.payload
          }
    

    default:
      return state
  }
}

export default mainReducer