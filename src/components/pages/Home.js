import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DrinkCard from '../drink/DrinkCard'

const Home = () => {
  const [drinks, setDrinks] = useState()

  const [text, setText] = useState('')

  const handleSearch = (e) => setText(e.target.value)
  
  const handleSubmit = (e) => {
    e.preventDefault() 
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`)
    .then(res => {
      setDrinks(res.data.drinks)
    })
  }

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
        <form className='form' onSubmit={handleSubmit}>
          <input type='text' name='text' placeholder='Find a drink...' value={text} onChange={handleSearch} />
          <input type='submit' value='Search' />
        </form>
        {drinks.map(drink => (
          <DrinkCard key={drink.idDrink} drink={drink} />
        ))}
    </div>
    )
  }
}

export default Home
