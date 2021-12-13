import React, { useContext } from 'react'
import DrinkCard from './DrinkCard'
import DrinkContext from '../../context/drinkContext'

const DrinkList = () => {
  const drinkContext = useContext(DrinkContext)

  const {drinks} = drinkContext

  return (
    <div>
      {drinks.map(drink => (
        <DrinkCard key={drink.idDrink} drink={drink} />
      ))}
    </div>
  )
}

export default DrinkList
