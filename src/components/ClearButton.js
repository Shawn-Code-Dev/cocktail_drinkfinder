import React, { useContext } from 'react'
import DrinkContext from '../context/drinkContext'

const ClearButton = () => {
  const drinkContext = useContext(DrinkContext)
  const { clearList } = drinkContext

  return (
  <div className='filter-container center'>
    <button onClick={clearList} className='btn center clear'>
      Clear
    </button>
  </div>
  )
}

export default ClearButton
