import React,{ useState } from 'react'
import logo from './docs/logo.svg'
import PopUp from './PopUp';


///displaying Each Index data as individual component
export default function LaptopBox(props) {
  const data = props.data
  const [popUp, setPopUp] = useState(false);
  const popUpClose = ()=>{
    setPopUp(false)
  }


  return (
    <div className='box' style={{marginRight: '55px'}} >
      <div className='capital text'>{data.bodyType}</div>
      <div className='text'><span style={{marginRight:'10px' }}>{data.modelName}</span>  {data.modelType}</div>
      <img className='mainImage' src={data.imageUrl} height="250px"></img>
      <div className='links'>
      <button className='btn' onClick={()=>setPopUp(true)}>LEARN
          <img className='logo' src={logo} height="20px"></img>
          </button>
          <button className='btn'>SHOP
          <img className='logo' src={logo} height="20px"></img>
          </button>
      </div>
      {popUp && <PopUp data={data} popUpClose={popUpClose}></PopUp>}
    </div>
  )
}
