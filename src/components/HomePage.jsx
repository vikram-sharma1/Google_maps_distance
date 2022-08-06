import React from 'react'
import './styles/HomePage.css'
import { ImLocation } from 'react-icons/im'
import { useRef } from 'react'
import {
    useJsApiLoader,
    GoogleMap,
    Marker,
    Autocomplete,
    DirectionsRenderer,
  } from '@react-google-maps/api'

const HomePage = () => {

    const originRef = useRef('')
    const destinationRef = useRef('')

    const handleSubmit = () => {
        console.log(originRef.current.value)
        console.log(destinationRef.current.value)
    }

    const apikey = `AIzaSyDKOi7-IfT3jAGFW64Migcq8nMMXMv4SjM`
    // const apikey2 = `AIzaSyBYEwlGQaUp7WHWtY5CFkGLw_OpIshXz2Y`

  return (
    <>

        <div className='flexing'>
            <div>
            <div className='mainBox'>
            <div className='flexingbox'>
                <div className='originBox'>
                    <div>
                        <label className='OriginLabel'>Origin</label>
                            <ImLocation className='icon iconPostionOri'/> 
                        <input type="text" className='inpBoxOrigin' ref={originRef} />
                    </div>
                    <div>
                        <label className='DesLabel'>Destination</label>
                            <ImLocation className='icon iconPostiondes'/> 
                        <input type="text" className='inpBoxOrigin' ref={destinationRef}/>
                    </div>
                </div>
                <div className='btnBox'>
                    <button className='calculateBtn' onClick={handleSubmit}>Lets Calculate</button>
                </div>
            </div>
            <div >
                <h2 className='outBox'><span>Distance</span><span>1403 Km</span></h2>
                {/* <p>The Distance between <b>{originRef.current.value}</b> and <b>{destinationRef.current.value}</b> is <b>1403 km</b></p> */}
            </div>
            
        </div>
            </div>
            <div>
                <h1>Map Box</h1>

            </div>
        </div>




        
    </>
  )
}

export default HomePage