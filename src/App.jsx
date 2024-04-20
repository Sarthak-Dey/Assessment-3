import React from 'react'
import Navbar from './components/navbar/Navbar'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import FoodDisplay from './components/FoodDisplay/FoodDisplay'
import Footer from './components/Footer/Footer'
import Review from './screens/Review'

const App = () => {
  return (
    <>
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />  
      </Routes>
      <Header/>
      <br />
      
      <br />
      <div>
      <hr />
      <FoodDisplay />
      <br />
      <br />
      <br />
      </div>

      
    </div>
    <br/>
    <br/>
    <Review/>
    <br />
    <br />
    <Footer></Footer>
    </>
    
  )
}

export default App;
