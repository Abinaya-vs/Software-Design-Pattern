import React, { useState } from 'react';
import './ProfilePage.css';
import Navbar2 from "../Components/Navbar2";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    UserName: 'Abinaya v',
    email: 'Abinaya@example.com',
    phoneNumber: 'enter your number',
    city: 'enter city',
    state: 'enter state',
    pincode: 'enter pincode',
    country: 'enter country',
    picture: 'https://via.placeholder.com/150', // Added picture field
  });

  const [editing, setEditing] = useState({
    UserName: false,
    email: false,
    phoneNumber: false,
    city: false,
    state: false,
    pincode: false,
    country: false,
  });

  const handleEdit = (field) => {
    setEditing({ ...editing, [field]: !editing[field] });
  };

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, picture: reader.result });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSave = () => {
    // Here, you would typically send the updated profile data to your backend
    console.log('Profile saved:', profile);
  };

  return (
    <div><Navbar2/>
    <div className="profile-container">
      <div className="profile-avatar-container">
        <img
          src={profile.picture}
          alt="Profile"
          className="profile-avatar"
          onClick={() => document.getElementById('fileInput').click()}
        />
        <input
          type="file"
          id="fileInput"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </div>
      <div className="profile-info">
        {Object.keys(profile).filter(field => field !== 'picture').map((field) => (
          <div className="profile-field" key={field}>
            <label>{field.replace(/([A-Z])/g, ' $1').trim()}:</label>
            {editing[field] ? (
              <input
                type="text"
                name={field}
                value={profile[field]}
                onChange={handleChange}
                onBlur={() => handleEdit(field)}
                autoFocus
              />
            ) : (
              <span onClick={() => handleEdit(field)}>{profile[field]}</span>
            )}
          </div>
        ))}
      </div>
      <button onClick={handleSave} className="save-button">Save Changes</button>
    </div>
    </div>
  );
};

export default ProfilePage;
