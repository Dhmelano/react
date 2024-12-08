import { useState } from 'react'
import './App.css'
import CondicionalUno from './components/CondicionalUno'
import CondicionalDos from './components/CondicionalDos'
import CondicionalTres from './components/CondicionalTres'
import Loader from './components/Loader'


function App() {
  

  return (
    <>
      <CondicionalUno nombre="paola"/>
      <CondicionalDos booleano={true}/>
      <CondicionalTres booleano={false}/>
      <Loader/>
    </>
  )
}

export default App
