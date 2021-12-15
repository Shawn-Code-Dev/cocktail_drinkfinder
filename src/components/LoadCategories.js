import React, { useEffect, useContext, useState } from 'react'
import DrinkContext from '../context/drinkContext'

const LoadCategories = () => {
  const drinkContext = useContext(DrinkContext)
  const { categories, selected, drinks } = drinkContext

  const [disabled, setDisabled] = useState(false)
  const [option, setOption] = useState('')

  useEffect(() => {
    drinkContext.getCategories()
  }, []) //eslint-disable-line

  useEffect(() => {
    if (((drinks === undefined || drinks[0] === undefined) && (selected.glass || selected.ingredient || selected.alcoholic)) || drinks[0]==='404'){
      setDisabled(true)
    } else if (selected.category) {
      setDisabled(true)
    } else {
      setDisabled(false)
      setOption('')
    }
  }, [drinks]) //eslint-disable-line

  const handleSubmit = (e) => {
    e.preventDefault()
    drinkContext.getDrinksByCategory(option)
  }

  const handleChange = (e) => {
    setOption(e.target.value)
  }

  return (
    <div className='filter-container center'>
      <form onSubmit={handleSubmit} className='form'>
        <select onChange={handleChange} value={option} className='interactable' disabled={disabled}>
          <option defaultValue value=''>--Categories--</option>
          {categories.map(category => (
          <option value={`${category.strCategory}`} key={`${category.strCategory}`} >{`${category.strCategory}`}</option>
          ))}
        </select>
        {!disabled && (option !== '') && <input type='submit' value='Search' className='btn'/>}
      </form>
    </div>
  )
}

export default LoadCategories
