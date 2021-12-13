import React from 'react'
import LoadCategories from '../categories/LoadCategories'
import DrinkList from '../drink/DrinkList'
import LoadIngredients from '../ingredients/LoadIngredients'
import Search from '../Search'

const Home = () => {

  return (
    <div>
      <Search />
      <LoadCategories />
      <LoadIngredients />
      <DrinkList />
  </div>
  )
}

export default Home
