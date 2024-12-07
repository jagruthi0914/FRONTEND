import React, { useState, useEffect } from 'react';
import './Profile.css';
// Mock data (You can replace this with actual data from an API)
const initialProfileData = {
  name: 'John Doe',
  rollNumber: '123456',
  department: 'Computer Science',
  email: 'johndoe@example.com',
  phone: '123-456-7890',
  address: '123 Main St, City, Country',
  schoolEducation: 'XYZ High School, 2019',
  citizenshipProof: 'Aadhaar Card (ID 1234 5678 9101)',
  motherName: 'Jane Doe',
  fatherName: 'Richard Doe',
  identificationMarks: 'Small scar on left hand',
  profilePicture: 'https://via.placeholder.com/150', // Example image
};

const ProfilePage = () => {
  // Profile state to manage current user data
  const [profileData, setProfileData] = useState(initialProfileData);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Fetch profile data from backend here (if necessary)
    // setProfileData(fetchedData);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Save the updated profile data here (e.g., send to backend)
    // For now, we'll just log it
    console.log('Profile saved:', profileData);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="profile-container">
      <h2>Student Profile</h2>
      <div className="profile-form">
        {/* Profile Picture Section */}
        <div className="profile-picture">
          <img src={profileData.profilePicture} alt="Profile" />
          {isEditing && (
            <input
              type="file"
              name="profilePicture"
              accept="image/*"
              onChange={(e) => handleChange(e)}
            />
          )}
        </div>

        {/* Basic Info Section */}
        <div className="profile-field">
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={profileData.name}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div className="profile-field">
          <label>Roll Number: </label>
          <input
            type="text"
            name="rollNumber"
            value={profileData.rollNumber}
            onChange={handleChange}
            disabled
          />
        </div>
        <div className="profile-field">
          <label>Department: </label>
          <input
            type="text"
            name="department"
            value={profileData.department}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div className="profile-field">
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={profileData.email}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div className="profile-field">
          <label>Phone: </label>
          <input
            type="text"
            name="phone"
            value={profileData.phone}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div className="profile-field">
          <label>Address: </label>
          <input
            type="text"
            name="address"
            value={profileData.address}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>

        {/* School Education Details */}
        <div className="profile-field">
          <label>School Education: </label>
          <input
            type="text"
            name="schoolEducation"
            value={profileData.schoolEducation}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>

        {/* Citizenship Proof */}
        <div className="profile-field">
          <label>Citizenship Proof: </label>
          <input
            type="text"
            name="citizenshipProof"
            value={profileData.citizenshipProof}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>

        {/* Parent's Details */}
        <div className="profile-field">
          <label>Mother's Name: </label>
          <input
            type="text"
            name="motherName"
            value={profileData.motherName}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div className="profile-field">
          <label>Father's Name: </label>
          <input
            type="text"
            name="fatherName"
            value={profileData.fatherName}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>

        {/* Identification Marks */}
        <div className="profile-field">
          <label>Identification Marks: </label>
          <input
            type="text"
            name="identificationMarks"
            value={profileData.identificationMarks}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>

        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={handleEdit}>Edit Profile</button>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
