import React from 'react'
import SurveyPage from './Components/Survey/SurveyPage'
import Survey from './Components/Survey/Survey'
import LandingPage from './Components/Survey/landingPage'
import NavBar from './Components/Survey/navBar'
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