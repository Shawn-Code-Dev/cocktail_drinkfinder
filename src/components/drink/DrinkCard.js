import React from 'react'
import { Link } from 'react-router-dom'

const DrinkCard = ({drink: {strDrink, strCategory, strDrinkThumb, strGlass, idDrink}}) => {
  return (
    <div className='card'>
      <h2>{strDrink}</h2>
      <img src={`${strDrinkThumb}/preview`} alt='' />
      <div className='extra-info'>
        <p>{strCategory}</p>
        <p>{strGlass}</p>
      </div>
      <Link to={`/drink/${idDrink}`} className='btn'>More Info</Link>
    </div>
  )
}

export default DrinkCard
