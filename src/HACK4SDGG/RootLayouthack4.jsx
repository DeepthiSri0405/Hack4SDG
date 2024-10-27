import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderHack from './Headerahack'
import FooterHack from './FooterHack'

function RootLayouthack4() {
  return (
    <div>
       <HeaderHack/>
        <div style={{minHeight:'70vh'}} className='container- outdiv'>
        <Outlet/>
        </div>
        <FooterHack/>
    </div>
  )
}

export default RootLayouthack4