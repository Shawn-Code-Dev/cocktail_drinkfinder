import React from 'react'

const CategoryButton = ({category: {strCategory}}) => {
  return (
    <form className='form' >
      <input type='submit' value={`${strCategory}`} />
    </form>
  )
}

export default CategoryButton
