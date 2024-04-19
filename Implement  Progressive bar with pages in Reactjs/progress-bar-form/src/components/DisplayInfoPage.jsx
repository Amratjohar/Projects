import React from 'react';
import '../App.css';

const DisplayInfoPage = () => {
  const name = localStorage.getItem('name');
  const email = localStorage.getItem('email');
  const mobile = localStorage.getItem('mobile');
  const gender = localStorage.getItem('gender');
  const dob = localStorage.getItem('dob');
  const correspondenceAddress = localStorage.getItem('correspondenceAddress');
  const permanentAddress = localStorage.getItem('permanentAddress');
  const tenthSchool = localStorage.getItem('tenthSchool');
  const tenthPercentage = localStorage.getItem('tenthPercentage');
  const tenthYear = localStorage.getItem('tenthYear');
  const twelfthSchool = localStorage.getItem('twelfthSchool');
  const twelfthPercentage = localStorage.getItem('twelfthPercentage');
  const twelfthYear = localStorage.getItem('twelfthYear');
  const graduationCollege = localStorage.getItem('graduationCollege');
  const graduationPercentage = localStorage.getItem('graduationPercentage');
  const graduationYear = localStorage.getItem('graduationYear');

  return (
    <div className="display-container">
      <h2>Display Information</h2>
      <div>
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Mobile:</strong> {mobile}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Date of Birth:</strong> {dob}</p>
      </div>
      <div>
        <h3>Address Details</h3>
        <p><strong>Correspondence Address:</strong> {correspondenceAddress}</p>
        <p><strong>Permanent Address:</strong> {permanentAddress}</p>
      </div>
      <div>
        <h3>Qualification Details</h3>
        <h4>10th Details</h4>
        <p><strong>School Name:</strong> {tenthSchool}</p>
        <p><strong>Percentage:</strong> {tenthPercentage}</p>
        <p><strong>Year of Passing:</strong> {tenthYear}</p>
        <h4>12th Details</h4>
        <p><strong>School Name:</strong> {twelfthSchool}</p>
        <p><strong>Percentage:</strong> {twelfthPercentage}</p>
        <p><strong>Year of Passing:</strong> {twelfthYear}</p>
        <h4>Graduation Details</h4>
        <p><strong>College Name:</strong> {graduationCollege}</p>
        <p><strong>Percentage:</strong> {graduationPercentage}</p>
        <p><strong>Year of Passing:</strong> {graduationYear}</p>
      </div>
    </div>
  );
};

export default DisplayInfoPage;
