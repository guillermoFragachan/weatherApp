import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import mainReducer from './Reducers/index.js'
import thunk from 'redux-thunk'



const aComposeThatAlwaysWorks = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose



export const initialState = {
    
    cityWeatherNow:{
        
       
    },
    cityWeatherForecast:{

    }
   
  }
  const configureStore = createStore(mainReducer, initialState, aComposeThatAlwaysWorks(applyMiddleware(thunk)))

export default configureStore