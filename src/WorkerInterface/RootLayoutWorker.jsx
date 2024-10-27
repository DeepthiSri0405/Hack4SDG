import React from 'react'
import Worker from './worker'
import FooterUser from './FooterUser'
import { Outlet } from 'react-router-dom'

function RootLayoutWorker() {
  return (
    <div>
        <Worker/>
        <div style={{minHeight:'70vh'}} className='container- outdiv'>
        <Outlet/>
        </div>
        <FooterUser/>
    </div>
  )
}

export default RootLayoutWorker