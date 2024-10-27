import React from 'react'
import Sample1 from './Sample1'
import Sample2 from './Sample2'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'



function RootLayout1() {
  return (
   <div >
    <header className='d-flex justify-content-around'>
        <Link to="sample1">Sample1</Link>
        <Link to="sample2">Sample2</Link>
    </header>
    <Outlet/>
   </div>
  )
}

export default RootLayout1