import React, { useContext, useEffect, useState } from 'react'
import DrinkContext from '../context/drinkContext'

const LoadIngredients = () => {
  const drinkContext = useContext(DrinkContext)
  const { ingredients, selected, drinks } = drinkContext

  const [disabled, setDisabled] = useState(false)
  const [option, setOption] = useState('')

  useEffect(() => {
    drinkContext.getIngredients()
  }, []) //eslint-disable-line


  useEffect(() => {
    if (((drinks === undefined || drinks[0] === undefined) && (selected.category || selected.glass || selected.alcoholic)) || drinks[0]==='404'){
      setDisabled(true)
    } else if (selected.ingredient) {
      setDisabled(true)
    } else {
      setDisabled(false)
      setOption('')
    }
  }, [drinks]) //eslint-disable-line



  const handleSubmit = (e) => {
    e.preventDefault()
    drinkContext.getDrinksByIngredient(option)
  }

  const handleChange = (e) => {
    setOption(e.target.value)
  }

  return (
    <div className='filter-container center'>
      <form onSubmit={handleSubmit} className='form'>
        <select onChange={handleChange} value={option} className='interactable' disabled={disabled}>
          <option defaultValue value=''>--Ingredients--</option>
          {ingredients.map(ingredient => (
          <option value={`${ingredient.strIngredient1}`} key={`${ingredient.strIngredient1}`} >{`${ingredient.strIngredient1}`}</option>
          ))}
        </select>
        {!disabled && (option !== '') && <input type='submit' value='Search' className='btn'/>}
      </form>
    </div>
  )
}

export default LoadIngredients
