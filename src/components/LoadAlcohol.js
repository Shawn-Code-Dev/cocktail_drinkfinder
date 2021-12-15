import React, { useEffect, useContext, useState } from 'react'
import DrinkContext from '../context/drinkContext'

const LoadAlcohol = () => {
  const drinkContext = useContext(DrinkContext)
  const { alcoholic, selected, drinks } = drinkContext

  const [disabled, setDisabled] = useState(false)
  const [option, setOption] = useState('')

  useEffect(() => {
    drinkContext.getAlcoholic()
  }, []) //eslint-disable-line

  useEffect(() => {
    if (((drinks === undefined || drinks[0] === undefined) && (selected.glass || selected.ingredient || selected.category)) || drinks[0]==='404'){
      setDisabled(true)
    } else if (selected.alcoholic) {
      setDisabled(true)
    } else {
      setDisabled(false)
      setOption('')
    }
  }, [drinks]) //eslint-disable-line

  const handleSubmit = (e) => {
    e.preventDefault()
    drinkContext.getDrinksByAlcoholic(option)
  }

  const handleChange = (e) => {
    setOption(e.target.value)
  }

  return (
    <div className='filter-container center'>
      <form onSubmit={handleSubmit} className='form'>
        <select onChange={handleChange} value={option} className='interactable' disabled={disabled}>
          <option defaultValue value=''>--Alcoholic--</option>
          {alcoholic.map(alcohol => (
          <option value={`${alcohol.strAlcoholic}`} key={`${alcohol.strAlcoholic}`} >{`${alcohol.strAlcoholic}`}</option>
          ))}
        </select>
        {!disabled && (option !== '') && <input type='submit' value='Search' className='btn'/>}
      </form>
    </div>
  )
}

export default LoadAlcohol
