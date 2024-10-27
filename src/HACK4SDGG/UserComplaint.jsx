import React, { useState, useContext } from 'react';
import GeolocationWithNominatim from './GeolocationWithNominatim';
import { ComplaintContext } from './ComplaintContext';

function UserComplaint() {
  const [address, setAddress] = useState('');
  const [complaintText, setComplaintText] = useState('');
  const [image, setImage] = useState(null);
  const { setComplaintData } = useContext(ComplaintContext);

  const handleLocationUpdate = (newAddress) => {
    setAddress(newAddress);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setComplaintData({
      address,
      complaintText,
      image,
      status: 'pending'
    });
  };

  return (
    <div className="container mt-5 w-50">
      <div className="card shadow">
        <div className="card-header">
          <h2 className="text-center">User Complaint Form</h2>
        </div>
        <div className="card-body complaintform">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Address:</label>
              <input type="text" className="form-control" value={address} readOnly />
            </div>
            <div className="mb-3">
              <label className="form-label">Images:</label>
              <input type="file" name="image" onChange={handleImageChange} />
            </div>
            <div className="mb-3">
              <GeolocationWithNominatim onLocationUpdate={handleLocationUpdate} />
            </div>
            <div className="mb-3">
              <label className="form-label">Complaint:</label>
              <textarea
                className="form-control"
                name="complaint"
                rows="4"
                value={complaintText}
                onChange={(e) => setComplaintText(e.target.value)}
              ></textarea>
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
