import React, { useContext, useState } from 'react'
import DrinkContext from '../context/drinkContext'

const Search = () => {
  const drinkContext = useContext(DrinkContext)

  const [text, setText] = useState('')

  const handleSearch = (e) => setText(e.target.value)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    drinkContext.searchDrinks(text)
    setText('')
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <input type='text' name='text' placeholder='Find a drink...' value={text} onChange={handleSearch} />
        <input type='submit' value='Search' />
      </form>
    </div>
  )
}

export default Search
