import React from 'react'
import LoadCategories from '../LoadCategories'
import DrinkList from '../drink/DrinkList'
import LoadIngredients from '../LoadIngredients'
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
