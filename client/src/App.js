import React, { useState, useRef } from 'react';
import './App.css';
import Table from './table';

const App = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('');

  const fileInput = useRef();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
      const file = fileInput.current.files[0];
      const formData = new FormData();
      formData.append('image', file);

      try {
        // Send the image to the backend
        const response = await fetch('http://127.0.0.1:9000/upload', {
          method: 'POST',
          body: formData,
        });
  
        if (response.ok) {
          // Receive the image from the backend
          const blob = await response.blob();
          const imageUrl = URL.createObjectURL(blob);
          setUploadedImage(imageUrl);
        } else {
          console.error('Image upload failed.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
  };

  const handlePersonalInfoSubmit = (event) => {
    event.preventDefault();
    console.log('Submitting personal info:', { age, weight, height, gender });
    // Implement data handling here
  };

  return (
    <div style={{margin:"20px"}}>
      <header className="header">
        <a href="/">Image Upload</a>
      </header>
      <div className="container">
        <div className="left-panel">
          {uploadedImage && (
            <img src={uploadedImage} alt="Uploaded" style={{ width: '1000px',height: '700px' }} />
          )}
          <form onSubmit={handleFormSubmit}>
            <input ref={fileInput} type="file" accept="image/*"  />
            <button type="submit">Upload Image</button>
          </form>
        </div>
        <div className="right-panel">
        
      <div  style={{ display: 'flex', justifyContent:"space-between"}}>
        <form onSubmit={handlePersonalInfoSubmit} style={{ flex: 1 }}>
          <h3>Personal Information</h3>
          <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <input type="number" placeholder="Weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
            <p>&emsp; kg</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <input type="number" placeholder="Height" value={height} onChange={(e) => setHeight(e.target.value)} />
           <p>&emsp; cm</p>
          </div>
          <select value={gender} onChange={(e) => setGender(e.target.value)} style={{ marginBottom: '10px' }}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <button type="submit">Submit</button>
        </form>
        <Table/>
      </div>
    </div>
    </div>
    </div>
  );
};

export default App;