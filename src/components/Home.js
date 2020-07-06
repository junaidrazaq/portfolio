import React, { Fragment } from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Particles from './Particles'
import Styles from './Styles'
import '../App.css'

const Home = () => {
    const classes = Styles()

    return (
        <>
        <Navbar/>
        <div className='homeBackImg'>
            <Particles/>
            <Header/>
        </div>
        </>
    )
}

export default Home