import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'
import DisplayFood from '../../components/DisplayFood/DisplayFood'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {
  const [category, setCategory] = useState('All')
  return (
      <div>
      <Header />
      <Menu category={category} setCategory={setCategory} />
      <DisplayFood category={category} />
      <AppDownload />
    </div>
  )
}

export default Home