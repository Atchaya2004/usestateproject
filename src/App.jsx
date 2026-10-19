import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Inputvalue from './Inputvalue.jsx'
import ShowHide from './ShowHide.jsx'
import CharacterCounter from './CharacterCounter.jsx'
import StudentForm from './StudentForm.jsx'
import Skills from './Skills.jsx'
import  LocationForm from './LocationForm.jsx'

function App() {


  return (
   
   <div>
    <Inputvalue/>
    <ShowHide/>
    <CharacterCounter/>
    <StudentForm/>
    <Skills/>
    < LocationForm/>
   </div>
  )
}

export default App
