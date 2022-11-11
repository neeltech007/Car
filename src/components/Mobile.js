import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel';
import MobileBox from './MobileBox';
import './Mobile.css'


export default function Mobile(props) {

    const data = props.data
    return (
        <div>
            <div className='container'>
                <Carousel infiniteLoop autoPlay>
                {
                    data.map((idx) => (
                        <div>
                            <MobileBox data={idx}></MobileBox>
                        </div>
                    ))
                }
                </Carousel>
            </div>
        </div>
    )
}
