import React, { useContext, useEffect, useState } from 'react'
import DrinkContext from '../context/drinkContext'

const LoadGlasses = () => {
  const drinkContext = useContext(DrinkContext)
  const { glasses, selected, drinks } = drinkContext

  const [disabled, setDisabled] = useState(false)
  const [option, setOption] = useState('')

  useEffect(() => {
    drinkContext.getGlasses()
  }, []) //eslint-disable-line

  useEffect(() => {
    if (((drinks === undefined || drinks[0] === undefined) && (selected.category || selected.ingredient || selected.alcoholic)) || drinks[0]==='404'){
      setDisabled(true)
    } else if (selected.glass) {
      setDisabled(true)
    } else {
      setDisabled(false)
      setOption('')
    }
  }, [drinks]) //eslint-disable-line

  const handleSubmit = (e) => {
    e.preventDefault()
    drinkContext.getDrinksByGlass(option)
  }

  const handleChange = (e) => {
    setOption(e.target.value)
  }

  return (
    <div className='filter-container center'>
      <form onSubmit={handleSubmit} className='form'>
        <select onChange={handleChange} value={option} className='interactable' disabled={disabled}>
          <option defaultValue value=''>--Glasses--</option>
          {glasses.map(glass => (
          <option value={`${glass.strGlass}`} key={`${glass.strGlass}`} >{`${glass.strGlass}`}</option>
          ))}
        </select>
        {!disabled && (option !== '') && <input type='submit' value='Search' className='btn'/>}
      </form>
    </div>
  )
}

export default LoadGlasses
