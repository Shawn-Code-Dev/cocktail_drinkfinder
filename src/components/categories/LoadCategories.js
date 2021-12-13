import React, { useEffect, useContext } from 'react'
import DrinkContext from '../../context/drinkContext'
import CategoryButton from './CategoryButton'

const LoadCategories = () => {
  const drinkContext = useContext(DrinkContext)

  const { categories } = drinkContext

  useEffect(() => {
    drinkContext.getCategories()
  }, []) //eslint-disable-line

  return (
    <div className='filter-container'>
      {categories.map(category => (
        <CategoryButton category={category} key={category.strCategory} />
      ))}
    </div>
  )
}

export default LoadCategories
