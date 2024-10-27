import React, { useState } from 'react';
import GeolocationWithNominatim from './GeolocationWithNominatim';

function UserComplaint() {
  const [address, setAddress] = useState('');

  const handleLocationUpdate = (newAddress) => {
    setAddress(newAddress);
  };

  return (
    <div className="container mt-5 w-50">
      <div className="card shadow">
        <div className="card-header">
          <h2 className="text-center">User Complaint Form</h2>
        </div>
        <div className="card-body complaintform">
          <form>
            {/* <div className="mb-3">
              <label className="form-label">Name:</label>
              <input type="text" className="form-control" name="name" />
            </div>

            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input type="email" className="form-control" name="email" />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone Number:</label>
              <input type="tel" className="form-control" name="phone" />
            </div> */}

            <div className="mb-3">
              <label className="form-label">Address:</label>
              <input type="text" className="form-control" name="address" value={address} readOnly />
            </div>
            <div className="mb-3">
              <label className="form-label">Images:</label>
              <input type="file" name="image" id=""  />
              <input type="image" src="" alt="" />
            </div>

            <div className="mb-3">
              <GeolocationWithNominatim onLocationUpdate={handleLocationUpdate} />
            </div>

            <div className="mb-3">
              <label className="form-label">Complaint:</label>
              <textarea className="form-control" name="complaint" rows="4"></textarea>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserComplaint;
