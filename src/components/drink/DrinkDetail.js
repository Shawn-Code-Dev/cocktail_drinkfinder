import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import DrinkContext from '../../context/drinkContext'
import { createIngredientList } from '../../helpers'
import Spinner from '../Spinner'



const DrinkDetail = () => {
  const drinkContext = useContext(DrinkContext)
  const { getDrink, drink, loading } = drinkContext

  const { id } = useParams()

  const [drinkIngredients, setDrinkIngredients] = useState([])

  useEffect(() => {
    getDrink(id)
  }, []) //eslint-disable-line

  useEffect(() => {
    setDrinkIngredients(createIngredientList(drink))
  }, [drink])

  const {
    strDrink,
    strCategory,
    strIBA,
    strGlass,
    strInstructions,
    strDrinkThumb
  } = drink
  if(drink === '404') return <h2 style={{textAlign:'center'}}>404: No drink with given ID</h2>
  if(loading) return <Spinner />
  return (<>
    <Link to='/' className='btn'>
        Back To Search
    </Link>
    <div className='card'>
      <h2>{strDrink}</h2>
      <img src={strDrinkThumb} alt="" style={{width:'50rem'}}/>
      <p><span className='bold'>Category: </span>{strCategory}</p>
      <p>{strIBA}</p>
      <p><span className='bold'>Glass: </span>{strGlass}</p>
      <p><span className='bold'>Instructions: </span>{strInstructions}</p>
      <div className='detail'>
        {drinkIngredients.map(res => (
          <p>{`${res}`}</p>
        ))}
      </div>
    </div>
    </>)
}

export default DrinkDetail
