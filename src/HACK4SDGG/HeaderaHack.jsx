import React from 'react'

function HeaderHack() {
  return (
    <div className='municipal'> 
        <nav className='navbar d-flex justify-contents-around upper'>
        <div>
            <h1 className='p-4 '>Greater Hyderabad Municipal Corporation
            <img src="https://d2e1hu1ktur9ur.cloudfront.net/wp-content/uploads/2024/04/dhmc.jpg" alt="" width='100px'className="rounded-circle p-1" />
            </h1>
        
        </div>
        <div>
            <ul className='list-unstyled d-flex p-4 '>
               <a href="#" className='nav-item p-3 text-dark text-decoration-none'>About us</a>
                <a href="#" className='nav-item p-3 text-dark text-decoration-none'>Contact No</a> 
                <a href="#" className='nav-item p-3 text-dark text-decoration-none'>Profile</a>
            </ul>
           
        </div>
        </nav>
    </div>
  )
}

export default HeaderHack;