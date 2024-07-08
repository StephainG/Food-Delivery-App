import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'
import DisplayFood from '../../components/DisplayFood/DisplayFood'

const Home = () => {
  const [category, setCategory] = useState('All')
  return (
      <div>
      <Header />
      <Menu category={category} setCategory={setCategory} />
      <DisplayFood category={category} />
    </div>
  )
}

export default Home