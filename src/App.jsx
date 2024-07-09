import { useState, useRef } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import './App.css'

function App() {
  const inputRef = useRef(null);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App