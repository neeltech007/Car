import React from 'react'
import Laptop from './Laptop'
import Mobile from './Mobile';

//checking if user is on mobile device or Loptop/computer device according to width

export default function MobileOrCom(props) {

  const width = window.innerWidth;

  return (
    <div>
      {width > '420' && <Laptop data={props.data} ></Laptop>}
      {width < '420' && <Mobile data={props.data}></Mobile>}
    </div>

  )
}
