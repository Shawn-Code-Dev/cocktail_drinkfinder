import React from 'react'
import { Link } from 'react-router-dom'

const DrinkCard = ({drink: {strDrink, strCategory, strDrinkThumb, strGlass, idDrink}}) => {
  return (
    <div>
      <h2>{strDrink}</h2>
      <img src={`${strDrinkThumb}/preview`} alt='' />
      <p>{strCategory}</p>
      <p>{strGlass}</p>
      <Link to={`/drink/${idDrink}`} >More Info</Link>
    </div>
  )
}

export default DrinkCard
