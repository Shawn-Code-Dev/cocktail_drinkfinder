import React from 'react'

const DrinkCard = ({drink: {strDrink, strCategory, strDrinkThumb, strGlass}}) => {
  return (
    <div>
      <h2>{strDrink}</h2>
      <img src={`${strDrinkThumb}/preview`} alt='' />
      <p>{strCategory}</p>
      <p>{strGlass}</p>
    </div>
  )
}

export default DrinkCard
