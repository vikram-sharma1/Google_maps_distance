import React from 'react'
import './styles/HomePage.css'
import { ImLocation } from 'react-icons/im'

const HomePage = () => {
  return (
    <>
        <div className='mainBox'>
            <div className='flexing'>
                <div className='originBox'>
                    <div>
                        <label className='OriginLabel'>Origin</label>
                            <ImLocation className='icon iconPostionOri'/> 
                        <input type="text" className='inpBoxOrigin' />
                    </div>
                    <div>
                        <label className='DesLabel'>Destination</label>
                            <ImLocation className='icon iconPostiondes'/> 
                        <input type="text" className='inpBoxOrigin' />
                    </div>
                </div>
                <div className='btnBox'>
                    <button className='calculateBtn'>Lets Calculate</button>
                </div>
            </div>
            <div >
                <h2 className='outBox'><span>Distance</span><span>1403</span></h2>
                <p>The Distance between <b>Mumbai</b> and <b>Delhi</b> is <b>1403 km</b></p>
            </div>
            
        </div>
    </>
  )
}

export default HomePage