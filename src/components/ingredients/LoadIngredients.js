import React, { useContext, useEffect } from 'react'
import DrinkContext from '../../context/drinkContext'
import IngredientButton from './IngredientButton'

const LoadIngredients = () => {
  const drinkContext = useContext(DrinkContext)

  const { ingredients } = drinkContext

  useEffect(() => {
    drinkContext.getIngredients()
  }, []) //eslint-disable-line

  return (
    <div className='filter-container'>
      {ingredients.map(ingredient => (
        <IngredientButton ingredient={ingredient} key={ingredient.strIngredient} />
      ))}
    </div>
  )
}

export default LoadIngredients
