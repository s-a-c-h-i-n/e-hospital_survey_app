import React from 'react'
import SurveyPage from './Components/SurveyPage/SurveyPage'
import Survey from './Components/Survey/Survey'
import LandingPage from './Components/LandingPage/landingPage'
import NavBar from './Components/navBar'
import Navigation from './routes'
import { BrowserRouter } from 'react-router-dom'

export const App = () => {
  return (
    
    <BrowserRouter>
      <NavBar/>
      <Navigation/>
      </BrowserRouter>
  )
}

export default App;