import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DrinkContext from '../../context/drinkContext'



const DrinkDetail = () => {
  const drinkContext = useContext(DrinkContext)
  const { getDrink, drink, loading } = drinkContext

  const { id } = useParams()

  useEffect(() => {
    getDrink(id)
  }, []) //eslint-disable-line

  const {
    strDrink,
    strCategory,
    strIBA,
    strGlass,
    strInstructions,
    strDrinkThumb
  } = drink
  if(loading) return <div>LOADING</div>
  return (
    <div>
      <h2>{strDrink}</h2>
      <img src={strDrinkThumb} alt="" />
      <p>{strCategory}</p>
      <p>{strIBA}</p>
      <p>{strGlass}</p>
      <p>{strInstructions}</p>
    </div>
  )
}

export default DrinkDetail
