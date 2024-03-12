import React from 'react'
import { Element } from 'react-scroll'
import Home_content from './Home_content'
import './Home.css'

const Home = () => {
  return (
    <Element name='home' className='home'>
    <Home_content/>
    </Element>
  )
}

export default Home