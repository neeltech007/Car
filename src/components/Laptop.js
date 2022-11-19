import React, { useState } from 'react'
import logo from './docs/chevron-circled.svg'
import LaptopBox from './LaptopBox'
import './laptop.css'


export default function Laptop(props) {
    const data = props.data

    //for slider 
    
    const pre = () => {
        let box = document.querySelector('.container')
        box.scrollLeft = box.scrollLeft - window.innerWidth
    }
    const next = () => {
        let box = document.querySelector('.container')
        box.scrollLeft = box.scrollLeft + window.innerWidth
    }

    //for filter 
    const [filter, setFilter] = useState(['suv', 'estate', 'sedan'])
    //activ for differt colour for selected Button
    const [active, setActive] = useState('all')

    const suvshow = () => {
        setFilter(['suv'])
        setActive('suv')
    }
    const allShow = () => {
        setFilter(['suv', 'estate', 'sedan'])
        setActive('all')
    }
    const estateshow = () => {
        setFilter(['estate'])
        setActive('estate')
    }
    const sedanshow = () => {
        setFilter(['sedan'])
        setActive('sedan')
    }

    return (
        <div>
            {/*-------------------------- filter button --------------------------------*/}
            <div className='btnBox'>
                <button className={active === 'all' ? 'filterBtn active' : 'filterBtn'} onClick={allShow}>SHOW All</button>
                <button className={active === 'suv' ? 'filterBtn active' : 'filterBtn'} onClick={suvshow} >SUV</button>
                <button className={active === 'estate' ? 'filterBtn active' : 'filterBtn'} onClick={estateshow}>ESTATE</button>
                <button className={active === 'sedan' ? 'filterBtn active' : 'filterBtn'} onClick={sedanshow}>SEDAN</button>
            </div>

            {/*----------------- slider Button -----------------------------*/}
            {active === 'all' && <div className='sliderBtn'>
                <img src={logo} className='pre' onClick={pre} height="30px"></img>
                <img src={logo} className='next' onClick={next} height="30px"></img>
            </div>}

            <div className='container' style={{
                display: 'flex',
                justifyContent: 'space-evenly'
            }} >
                {
                    //Mapping all data --> sanding each index data to component with props
                    data.map((idx) => (
                        <>
                            {filter.includes(idx.bodyType) && <LaptopBox data={idx}></LaptopBox>}
                        </>
                    ))
                }

            </div>

            
        </div>
    )
}
