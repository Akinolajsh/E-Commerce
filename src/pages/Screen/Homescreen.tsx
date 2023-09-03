import React from 'react'
import Hero from './Hero'
import Guaranty from './Guaranty'
import TopProducts from './Store'
import Card from '../../components/static/Card'

const Homescreen = () => {
  return (
    <div>
        <Hero/>
        <Guaranty/>
        <TopProducts/>
        <Card/>
    </div>
  )
}

export default Homescreen