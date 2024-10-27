// import React from 'react'

// function HomeWorker() {
//   return (
//     <div>
//     <div className='HomeWor shadow-lg '>
//     <div className='Home'>
//      <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" className='rounded-circle p-2'alt="" width='150px' />
//      </div>
//      <div className='d-flex justify-content-around p-5'>
//      <h3>Name:</h3>
     
//      <h3>PhoneNumber:</h3>
//     </div>
//     </div>
//     <div className='TaskAss p-3 card'>
//      <div className='card-body'>
//         <h2>Issue ID:</h2>
//         <h2>Details:</h2>
//         <h2>Issue Description:</h2>
//         <h2>Status:</h2>
//         <h2>Upload Image after resolving:</h2>

//      </div>
// <div className='d-flex justify-content-around'>
//     <h2>Date:</h2>
//     <h2>Location:</h2>
// </div>
//     </div>

//     </div>
//   )
// }

// export default HomeWorker

import React from 'react';
import './HomeWorker.css'; // Ensure this points to your CSS file if you're using external styles

function HomeWorker() {
  return (
    <div className="HomeWorkerContainer">
      <div className="ProfileSection shadow-lg">
        <div className="Home">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            className="rounded-circle p-2"
            alt=""
            width="150px"
          />
        </div>
        <div className="profile-info">
          <h3 className='p-2 me-5'>Name:</h3>
          <h3 className='p-2 me-5'>Phone Number:</h3>
        </div>
      </div>

      <div className="TaskAss card p-3">
        <div className="card-body">
          <div className="form-group d-flex align-items-center">
            <label htmlFor="issueId" className="form-label">
              Issue ID:
            </label>
            <input type="text" id="issueId" className="form-control" />
          </div>

          <div className="form-group d-flex align-items-center">
            <label htmlFor="details" className="form-label">
              Details:
            </label>
            <input type="text" id="details" className="form-control" />
          </div>

          <div className="form-group d-flex align-items-center">
            <label htmlFor="issueDescription" className="form-label">
              Issue Description:
            </label>
            <textarea id="issueDescription" className="form-control" />
          </div>

          <div className="form-group d-flex align-items-center">
            <label htmlFor="status" className="form-label">
              Status:
            </label>
            <select id="status" className="form-select">
              <option value="open">Open</option>
              <option value="in-progress">In Progress</option>
              <option value="resolved">Resolved</option>
            </select>
          </div>

          <div className="form-group d-flex align-items-center">
            <label htmlFor="resolutionImage" className="form-label">
              Upload Image after resolving:
            </label>
            <input type="file" id="resolutionImage" className="form-control-file" />
          </div>
        </div>

        <div className="footer-info d-flex justify-content-around">
          <div className="d-flex align-items-center">
            <label htmlFor="date" className="form-label">
              Date:
            </label>
            <input type="date" id="date" className="form-control" />
          </div>

          <div className="d-flex align-items-center">
            <label htmlFor="location" className="form-label">
              Location:
            </label>
            <input type="text" id="location" className="form-control" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeWorker;

