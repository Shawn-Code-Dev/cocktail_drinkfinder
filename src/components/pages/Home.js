import React from 'react'
import LoadCategories from '../LoadCategories'
import LoadIngredients from '../LoadIngredients'
import LoadGlasses from '../LoadGlasses'
import DrinkList from '../drink/DrinkList'
import Search from '../Search'
import ClearButton from '../ClearButton'
import LoadAlcohol from '../LoadAlcohol'

const Home = () => {
  // A note on the <Load... /> components:
  // Due to how the API is constructed, there wasn't a fast way to compose these components into a single component.
  // Given more time, however, I could make a component that takes a key, and inside the component use the key to run a conditional to choose which API calls to make.
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
