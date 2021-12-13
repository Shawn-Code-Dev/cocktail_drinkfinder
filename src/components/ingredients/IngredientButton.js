import React from 'react'

const IngredientButton = ({ingredient: {strIngredient1}}) => {
  return (
    <form>
      <input type='submit' value={`${strIngredient1}`} />
    </form>
  )
}

export default IngredientButton
