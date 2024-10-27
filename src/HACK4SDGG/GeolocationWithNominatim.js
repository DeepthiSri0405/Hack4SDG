import React, { useState } from 'react';

const GeolocationWithNominatim = ({ onLocationUpdate }) => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    address: '',
  });

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation((prevState) => ({
            ...prevState,
            latitude,
            longitude,
          }));
          getReverseGeocoding(latitude, longitude);
        },
        (error) => {
          console.error('Error fetching geolocation:', error);
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  const getReverseGeocoding = async (latitude, longitude) => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
    );
    const data = await response.json();
    const address = data.display_name;
    setLocation((prevState) => ({
      ...prevState,
      address,
    }));
    onLocationUpdate(address);
  };

  return (
    <div>
      <button type="button" onClick={getUserLocation}>
        Get Present Location
      </button>
    </div>
  );
};

export default GeolocationWithNominatim;
