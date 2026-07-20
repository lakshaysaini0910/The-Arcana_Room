import React from 'react'
import "./home.css"
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className='homePage'>

                <div className='homeS1'>
                    <div className='homeS1text' >
                        <p> Tarot Reading Platform </p>
                        <button>Reading</button>
                    </div>
                    <img src='/cards/00-card-back.jpg' />
                </div>

            </div>

        </>
    )
}

export default Home