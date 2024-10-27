import React, { useState } from 'react';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);

      // Create a URL for the image preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (image) {
      console.log('Image uploaded:', image);
      // Handle the form submission and image upload
    }
  };

  return (
    <div className='p-5 '>
    <div className="image-upload">
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {preview && <img src={preview} alt="Preview" width="200" />}
        <button className='btn'type="submit">Upload Image</button>
      </form>
      <form>
      <label htmlFor="loc" className='p-4'>Location</label>
      <input type="text" placeholder='Autofilled' />
      </form>
    </div>
    </div>
  );
};

export default ImageUpload;
