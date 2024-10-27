import React from 'react'
import Test3 from './Test3'
import Test4 from './Test4'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'


function Sample2() {
  return (
    <div>
     <Link to="test3"><Test3/></Link>  
     <Link to="test4"><Test4/></Link>     
     <Outlet/>

    </div>
  )
}

export default Sample2