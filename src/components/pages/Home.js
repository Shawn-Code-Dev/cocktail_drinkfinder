import React from 'react'
import LoadCategories from '../LoadCategories'
import LoadIngredients from '../LoadIngredients'
import LoadGlasses from '../LoadGlasses'
import DrinkList from '../drink/DrinkList'
import Search from '../Search'
import ClearButton from '../ClearButton'
import LoadAlcohol from '../LoadAlcohol'

const Home = () => {
  return (
    <div>
      <Search />
      <LoadAlcohol />
      <LoadCategories />
      <LoadIngredients />
      <LoadGlasses />
      <ClearButton />
      <DrinkList />
    </div>
  )
}

export default Home
