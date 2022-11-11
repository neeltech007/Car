import React from 'react'
import logo from './docs/logo.svg'


export default function MobileBox(props) {

  const data = props.data;

  return (

    <div className='box' style={{
      marginTop: '150px',
      marginLeft: '25px'
    }}>


      <div className='capital text'>{data.bodyType}</div>
      <div className='text'><span>{data.modelName}</span></div>
      <div className='text lessOp'>{data.modelType}</div>
      <img className='mainImage' src={data.imageUrl} width='200px'></img>
      
      <div className='links'>
        <button className='btn'>LEARN
          <img className='logo' src={logo} height="20px"></img>
        </button>
        <button className='btn'>SHOP
          <img className='logo' src={logo} height="20px"></img>
        </button>
      </div>
      
    </div>

  )
}
