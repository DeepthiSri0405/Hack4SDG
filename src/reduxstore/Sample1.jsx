import React from 'react'
import Test1 from './Test1'
import Test2 from './Test2'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'



function Sample1() {
  return (
    <div>
      
      <Link to="test1"><Test1/></Link>  
      <Link to="test2"><Test2/></Link>  
      <Outlet/>
    </div>
  )
}

export default Sample1