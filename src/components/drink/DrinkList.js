import React, { useContext } from 'react'
import DrinkCard from './DrinkCard'
import DrinkContext from '../../context/drinkContext'

const DrinkList = () => {
  const drinkContext = useContext(DrinkContext)

  const {drinks} = drinkContext

  if (!drinks) {
    return (
      <h2>Invalid Selection</h2>
    )
  } else {
    return (
      <div>
        {drinks.map(drink => (
          <DrinkCard key={drink.idDrink} drink={drink} />
        ))}
        {console.log(drinks)}
      </div>
    )
  }
}

export default DrinkList
