import React from 'react'
import Tilt from 'react-tilt'
import'./logo.css'
import logo from './logo.png'

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 50 }} style={{ height: 200, width: 200 }} >
                <div className="Tilt-inner pa3"><img style={{paddingTop:'10px',paddingLeft:'10px', height:150, width:150}}src={logo} alt='logo'/> </div>
            </Tilt>
        </div>
    )

}

export default Logo