import React from 'react'
import Hero from './Hero'
import Guaranty from './Guaranty'
import TopProducts from './Store'
import Card from '../../components/static/Card'
import SectionPage from './SectionPage'

const Homescreen = () => {
  return (
    <div>
        <Hero/>
        <Guaranty/>
        <TopProducts/>
        {/* <Card/> */}
        <SectionPage/>
    </div>
  )
}

export default Homescreen