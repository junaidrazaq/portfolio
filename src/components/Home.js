import React, { Fragment } from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Particles from './Particles'
import Styles from './Styles'
// import { Box, Container } from '@material-ui/core'
import '../App.css'

const Home = () => {
    const classes = Styles()

    return (
        <>
        <div className='homeBackImg'>
        <Particles/>
        <Navbar/>
        <Header/>
        </div>
        </>
    )
}

export default Home