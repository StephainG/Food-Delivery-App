import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

import './DisplayFood.css'

const DisplayFood = () => {

    const {food_list} = useContext(StoreContext)
  return (
      <div className='displayfood'>
          <h2>Explore wide varieties of food</h2>
          <div className='displayfood-item'>
              {food_list.map((item, index) => {
                  return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
              })}
          </div>
    </div>
  )
}

export default DisplayFood