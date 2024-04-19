import React from 'react';

const PreviewPage = ({ formData }) => {
  return (
    <div className="preview-container">
      <h2>Preview</h2>
      <div className="preview-section">
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> {formData.personalInfo.name}</p>
        <p><strong>Email:</strong> {formData.personalInfo.email}</p>
        <p><strong>Mobile:</strong> {formData.personalInfo.mobile}</p>
        <p><strong>Gender:</strong> {formData.personalInfo.gender}</p>
        <p><strong>Date of Birth:</strong> {formData.personalInfo.dob}</p>
      </div>
      <div className="preview-section">
        <h3>Address Details</h3>
        <p><strong>Correspondence Address:</strong> {formData.address.correspondence}</p>
        <p><strong>Permanent Address:</strong> {formData.address.permanent}</p>
      </div>
      <div className="preview-section">
        <h3>Qualification Details</h3>
        <div>
          <h4>10th Details</h4>
          <p><strong>School Name:</strong> {formData.qualification.tenthSchool}</p>
          <p><strong>Percentage:</strong> {formData.qualification.tenthPercentage}</p>
          <p><strong>Year of Passing:</strong> {formData.qualification.tenthYear}</p>
        </div>
        <div>
          <h4>12th Details</h4>
          <p><strong>School Name:</strong> {formData.qualification.twelfthSchool}</p>
          <p><strong>Percentage:</strong> {formData.qualification.twelfthPercentage}</p>
          <p><strong>Year of Passing:</strong> {formData.qualification.twelfthYear}</p>
        </div>
        <div>
          <h4>Graduation Details</h4>
          <p><strong>College Name:</strong> {formData.qualification.graduationCollege}</p>
          <p><strong>Percentage:</strong> {formData.qualification.graduationPercentage}</p>
          <p><strong>Year of Passing:</strong> {formData.qualification.graduationYear}</p>
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;
