import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DrinkCard from '../drink/DrinkCard'

const Home = () => {
  const [drinks, setDrinks] = useState()

  useEffect(() => {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
    .then(res => {
      setDrinks(res.data.drinks)
    })
  }, [])


  if (!drinks) {
    return <p>Loading</p>
  } else {
    return (
      <div>
        {console.log(drinks)}
        {drinks.map(drink => (
          <DrinkCard key={drink.idDrink} drink={drink} />
        ))}
    </div>
    )
  }
}

export default Home
