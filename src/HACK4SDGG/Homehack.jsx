import React from 'react'
import { Link } from 'react-router-dom'

function Homehack() {
  return (
    <div className='imp'>
        <div>
        <div className='p-5 mx-auto'>
        <h3 className='slide-in  font-weight-bold font-italic ' >Environmental cleanliness begins with each individual's <br></br>desire to clean and maintain the surroundings</h3>
        </div>
        <div className='empty'></div>
        <div className='d-flex justify-content-around'>
            
            {/* <button className='btn btn-warning  '> <Link to='ImageUpload' className='text-decoration-none'>Upload Image</Link></button> */}
                        <button className='btn btn-warning  '> <Link to='UserComplaint' className='text-decoration-none'>Upload Image</Link></button>


            <button className="btn btn-warning"> <Link to='UploadedImages'  className='text-decoration-none'>Uploaded Problems</Link></button>
        </div>
        </div>
        <div className='p-5'>
            <img src="https://www.euroschoolindia.com/wp-content/uploads/2023/07/types-of-sustainable-development.jpg" className='mx-auto p-5 rounded-circle shadow-lg bg-body'alt=""width='500px' />
        </div>
    </div>
    
  )
}

export default Homehack