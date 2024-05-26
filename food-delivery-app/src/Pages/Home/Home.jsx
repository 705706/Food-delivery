import React, { useState } from 'react'
import './Home.css'
import Header from '../../Componenets/Navbar/Header/Header'
import ExploreMenu from '../../Componenets/Navbar/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Componenets/Navbar/FoodDisplay/FoodDisplay'
import AppDownload from '../../Componenets/AppDownload/AppDownload'


const Home = () => {

  const [category,setCategory]=useState("All")

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home