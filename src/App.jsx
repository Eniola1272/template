import { useState } from 'react'
import './App.css'
import Notification from './Components/Notification/Notification'
import Header from './Components/Header/Header'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hero from './Components/Hero/Hero'
import NewCollections from './Components/NewCollections/NewCollections'
import Gallery from './Components/Gallery/Gallery'
// import NewArrivals from './Components/NewArrivals/NewArrivals'


function App() {

  return (
    <>
      <Notification />
      <Header />
      <Hero />
      <Gallery />
      {/* <NewCollections /> */}
      {/* <NewArrivals /> */}
    </>
  )
}

export default App
