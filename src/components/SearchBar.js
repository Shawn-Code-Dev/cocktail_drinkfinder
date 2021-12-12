import React, { useState } from 'react'

const SearchBar = () => {
  const [text, setText] = useState('')

  const handleSearch = (e) => setText(e.target.value)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
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

export default SearchBar
