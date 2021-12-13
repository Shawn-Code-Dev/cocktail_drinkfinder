import React, { useEffect, useContext, useState } from 'react'
import DrinkContext from '../context/drinkContext'

const LoadCategories = () => {
  const drinkContext = useContext(DrinkContext)

  const { categories } = drinkContext

  useEffect(() => {
    drinkContext.getCategories()
  }, []) //eslint-disable-line

  const handleSubmit = (e) => {
    e.preventDefault()
    drinkContext.getDrinksByCategory(option)
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
          <option defaultValue value='Click to see categories'>SEE CATEGORIES</option>
          {categories.map(category => (
          <option value={`${category.strCategory}`} key={`${category.strCategory}`} >{`${category.strCategory}`}</option>
          ))}
        </select>
        <input type='submit' value='Search' />
      </form>
    </div>
  )
}

export default LoadCategories
