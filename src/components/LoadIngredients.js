import React, { useContext, useEffect, useState } from 'react'
import DrinkContext from '../context/drinkContext'

const LoadIngredients = () => {
  const drinkContext = useContext(DrinkContext)

  const { ingredients } = drinkContext

  useEffect(() => {
    drinkContext.getIngredients()
  }, []) //eslint-disable-line

  const handleSubmit = (e) => {
    e.preventDefault()
    drinkContext.getDrinksByIngredient(option)
    setOption('')
  }

  const [option, setOption] = useState('')
  const handleChange = (e) => {
    setOption(e.target.value)
  }

  return (
    <div className='filter-container'>
      <form onSubmit={handleSubmit}>
        <select onChange={handleChange} value={option}>
          <option defaultValue value='Click to see ingredients'>SEE INGREDIENTS</option>
          {ingredients.map(ingredient => (
          <option value={`${ingredient.strIngredient1}`} key={`${ingredient.strIngredient1}`} >{`${ingredient.strIngredient1}`}</option>
          ))}
        </select>
        <input type='submit' value='Search' />
      </form>
    </div>
  )
}

export default LoadIngredients
