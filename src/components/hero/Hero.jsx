import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='content'>
                <h1>Find the perfect place</h1>
                <p className='search-text'>Search the largest selection of luxury high-rise apartment, multi-family houses, and luxury homes.</p>
                <form className='search'>
                    <div>
                        <input 
                        type="text"
                        placeholder='Search by location'
                        />
                    </div>
                    <div className='radio'>
                        <input type="radio" checked name='type' id='buy' value='buy' />
                        <label>Buy</label>
                        <input type="radio" name='type' id='buy' value='buy' />
                        <label>Rent</label>
                        <button type='submit'><AiOutlineSearch className='icon' /> </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero