import React from 'react'
import "./App.css"
import Header from "./components/Header"
import Value from "./components/Value"
import Button from "./components/Button"
// import Setting from "./components/Setting"

import './App.css'

function App() {
  return(
    <div className='calculator-container'>
      <Header />
      <Value />
      <Button />
      {/* <Setting /> */}
    </div>
  )
}


export default App
