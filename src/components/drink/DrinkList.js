import React, { useContext } from 'react'
import DrinkCard from './DrinkCard'
import DrinkContext from '../../context/drinkContext'
import Spinner from '../Spinner'

const DrinkList = () => {
  const drinkContext = useContext(DrinkContext)

  const {drinks, selected} = drinkContext

  if (drinks == null) {
    return (
      <Spinner />
    )
  } else if ((selected.category || selected.ingredient || selected.glass || selected.alcoholic) && !drinks[0]) {
    return (
      <h2 style={{textAlign:'center'}}>No drinks match your query</h2>
    )
  } else if (drinks[0] === '404') {
    return (
      <h2 style={{textAlign:'center'}}>No drinks with that name</h2>
    )
  } else {
    return (
      <div className='drink-list'>
        {drinks.map(drink => (
          <DrinkCard key={drink.idDrink} drink={drink} />
        ))}
      </div>
    )
  }
}

export default DrinkList
