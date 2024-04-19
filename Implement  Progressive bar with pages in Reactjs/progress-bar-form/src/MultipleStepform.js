import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { FaCheck } from "react-icons/fa";

import './App.css';

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {},
    address: {},
    qualification: {}
  });
  const [photo, setPhoto] = useState(null); // State to store uploaded photo
  const [ setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    if (storedUsers) {
      setUsers(storedUsers);
    }
  }, []);

  const handleNext = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data
    }));
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  
  const handleSubmit = () => {
    alert('User successfully registered!');

    // Generate PDF
    generatePDF();
  };
  
  const generatePDF = () => {
    // Create new jsPDF instance
    const doc = new jsPDF();
  
    // Define columns for the PDF table
    const columns = ['Field', 'Value'];
  
    // Extract data from formData
    const data = [];
    // Personal Information
    data.push(['Name', formData.personalInfo.name]);
    data.push(['Email', formData.personalInfo.email]);
    data.push(['Mobile', formData.personalInfo.mobile]);
    data.push(['Gender', formData.personalInfo.gender]);
    data.push(['Date of Birth', formData.personalInfo.dob]);
    // Address Details
    data.push(['Correspondence Address', formData.address.correspondence]);
    data.push(['Permanent Address', formData.address.permanent]);
    // Qualification Details
    data.push(['10th School Name', formData.qualification.tenthSchool]);
    data.push(['10th Percentage', formData.qualification.tenthPercentage]);
    data.push(['10th Year of Passing', formData.qualification.tenthYear]);
    data.push(['12th School Name', formData.qualification.twelfthSchool]);
    data.push(['12th Percentage', formData.qualification.twelfthPercentage]);
    data.push(['12th Year of Passing', formData.qualification.twelfthYear]);
    data.push(['Graduation College Name', formData.qualification.graduationCollege]);
    data.push(['Graduation Percentage', formData.qualification.graduationPercentage]);
    data.push(['Graduation Year of Passing', formData.qualification.graduationYear]);
  
    // Add user's photo if available
    if (photo) {
      doc.addImage(photo, 'JPEG', 15, 15, 30, 30); // Assuming dimensions and position
    }
  
    // Set document font size and text
    doc.setFontSize(12);
    doc.text('User Info', 15, 55); // Assuming position
  
    // Auto table to generate table in PDF
    doc.autoTable({
      startY: 65, // Assuming position
      head: [columns],
      body: data,
    });
  
    // Save the PDF
    doc.save('preview_info.pdf');
  };
  
   const renderFormData = () => {
    // Data in a table format
    return (
      <div className="display-container">
        <h2 class="btn-shine">Preview</h2>
        <div>
          <h3>Personal Information</h3>
          <p>Name: {formData.personalInfo.name}</p>
          <p>Email: {formData.personalInfo.email}</p>
          <p>Mobile: {formData.personalInfo.mobile}</p>
          <p>Gender: {formData.personalInfo.gender}</p>
          <p>Date of Birth: {formData.personalInfo.dob}</p>
          {photo && <img src={photo} alt="User" />}
        </div>
        <div>
          <h3>Address Details</h3>
          <p>Correspondence Address: {formData.address.correspondence}</p>
          <p>Permanent Address: {formData.address.permanent}</p>
        </div>
        <div>
          <h3>Qualification Details</h3>
          <div>
            <h4>10th Details</h4>
            <p>School Name: {formData.qualification.tenthSchool}</p>
            <p>Percentage: {formData.qualification.tenthPercentage}</p>
            <p>Year of Passing: {formData.qualification.tenthYear}</p>
          </div>
          <div>
            <h4>12th Details</h4>
            <p>School Name: {formData.qualification.twelfthSchool}</p>
            <p>Percentage: {formData.qualification.twelfthPercentage}</p>
            <p>Year of Passing: {formData.qualification.twelfthYear}</p>
          </div>
          <div>
            <h4>Graduation Details</h4>
            <p>College Name: {formData.qualification.graduationCollege}</p>
            <p>Percentage: {formData.qualification.graduationPercentage}</p>
            <p>Year of Passing: {formData.qualification.graduationYear}</p>
          </div>
        </div>
        {/* <button onClick={handleBack}>Back</button> */}
        {/* <button onClick={handleSubmit}>Submit</button> */}
      </div>
    );
  };
  
  // const displayFormData = () => {
  //   setStep(5); // Update step to display the form data
  // };

  const handlePreview = () => {
    setStep(4); // Render preview section
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setPhoto(event.target.result);
      localStorage.setItem('photo', event.target.result); // Store photo in local storage
    };
    reader.readAsDataURL(file);
  };

  const stepNames = ['Personal Information', 'Address Details', 'Qualification Details', 'Preview'];

  return (
    <div className="app-container">
      
      {/* <div className="progress-bar">
          <div className="progress-line-container">
            {stepNames.map((stepName, index) => (
              <React.Fragment key={index}>
                <div className={`progress-number ${index < step - 1 ? 'completed' : ''} ${index === step - 1 ? 'active' : ''}`}>{index + 1}</div>
                {index < stepNames.length - 1 && <div className={`progress-line ${index < step - 1 ? 'completed' : ''}`} style={{ width: `${100 / (stepNames.length - 1)}%` }}></div>}
              </React.Fragment>
            ))}
          </div>
          <div className="progress-names">
            {stepNames.map((stepName, index) => (
              <div key={index} className="step-name">{stepName}</div>
            ))}
          </div>
       </div> */}

      <div className="progress-bar">
        <div className="progress-line-container">
          {stepNames.map((stepName, index) => (
            <React.Fragment key={index}>
              {index < step - 1 ? (
                <div className={`progress-tick completed`}><FaCheck className='icon'/></div>
              ) : (
                <div className={`progress-number ${index === step - 1 ? 'active' : ''}`}>{index + 1}</div>
              )}
              {index < stepNames.length - 1 && <div className={`progress-line ${index < step - 1 ? 'completed' : ''}`} style={{ width: `${100 / (stepNames.length - 1)}%` }}></div>}
            </React.Fragment>
          ))}
        </div>
        <div className="progress-names">
          {stepNames.map((stepName, index) => (
            <div key={index} className="step-name">{stepName}</div>
          ))}
        </div>
      </div>



      {step === 1 && (
        <div className="form-container">
          <h2 class="btn-shine">Personal Information</h2>

          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Name" value={formData.personalInfo.name || ''} onChange={(e) => setFormData({ ...formData, personalInfo: { ...formData.personalInfo, name: e.target.value } })} /> 
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Email" value={formData.personalInfo.email || ''} onChange={(e) => setFormData({ ...formData, personalInfo: { ...formData.personalInfo, email: e.target.value } })} />

          <label htmlFor="mobile">Mobile:</label>
          <input type="text" id="mobile" placeholder="Mobile" value={formData.personalInfo.mobile || ''} onChange={(e) => setFormData({ ...formData, personalInfo: { ...formData.personalInfo, mobile: e.target.value } })} />

          <label htmlFor="gender">Gender:</label>
          <div>
            <input type="radio" id="male" name="gender" value="Male" checked={formData.personalInfo.gender === 'Male'} onChange={(e) => setFormData({ ...formData, personalInfo: { ...formData.personalInfo, gender: e.target.value } })} /> <label htmlFor="male">Male</label>
            <input type="radio" id="female" name="gender" value="Female" checked={formData.personalInfo.gender === 'Female'} onChange={(e) => setFormData({ ...formData, personalInfo: { ...formData.personalInfo, gender: e.target.value } })} /> <label htmlFor="female">Female</label>
          </div>

          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" id="dob" placeholder="Date of Birth" value={formData.personalInfo.dob || ''} onChange={(e) => setFormData({ ...formData, personalInfo: { ...formData.personalInfo, dob: e.target.value } })} />

          <label htmlFor="photo">Upload Photo:</label>
          <input type="file" id="photo" accept="image/*" onChange={handlePhotoUpload} />

          <button onClick={handleNext}>Next</button>
          
        </div>
      )}

      {step === 2 && (
       <div className="form-container">
       <h2 class="btn-shine">Address Information</h2>
       <label htmlFor="correspondence">Correspondence Address:</label>
       <textarea id="correspondence" placeholder="Correspondence Address" value={formData.address.correspondence || ''} onChange={(e) => setFormData({ ...formData, address: { ...formData.address, correspondence: e.target.value } })}></textarea>
       <label htmlFor="permanent">Permanent Address:</label>
       <textarea id="permanent" placeholder="Permanent Address" value={formData.address.permanent || ''} onChange={(e) => setFormData({ ...formData, address: { ...formData.address, permanent: e.target.value } })}></textarea>
       <div class="btn">
         <button onClick={handlePrevious}>Previous</button>
         <button onClick={handleNext}>Next</button>
       </div>
     </div>
     
      )}

      {step === 3 && (
        <div className="form-container">
          <h2 class="btn-shine">Educational Qualifications</h2>
          <div className='sect'>
            <h3>10th Details</h3>
            <label htmlFor="tenthSchool">School Name:</label>
            <input type="text" id="tenthSchool" placeholder="School Name" value={formData.qualification.tenthSchool || ''} onChange={(e) => setFormData({ ...formData, qualification: { ...formData.qualification, tenthSchool: e.target.value } })} />
            <label htmlFor="tenthPercentage">Percentage:</label>
            <input type="text" id="tenthPercentage" placeholder="Percentage" value={formData.qualification.tenthPercentage || ''} onChange={(e) => setFormData({ ...formData, qualification: { ...formData.qualification, tenthPercentage: e.target.value } })} />
            <label htmlFor="tenthYear">Year of Passing:</label>
            <input type="text" id="tenthYear" placeholder="Year of Passing" value={formData.qualification.tenthYear || ''} onChange={(e) => setFormData({ ...formData, qualification: { ...formData.qualification, tenthYear: e.target.value } })} />
          </div>
          <div className='sect'>
            <h3>12th Details</h3>
            <label htmlFor="twelfthSchool">School Name:</label>
            <input type="text" id="twelfthSchool" placeholder="School Name" value={formData.qualification.twelfthSchool || ''} onChange={(e) => setFormData({ ...formData, qualification: { ...formData.qualification, twelfthSchool: e.target.value } })} />
            <label htmlFor="twelfthPercentage">Percentage:</label>
            <input type="text" id="twelfthPercentage" placeholder="Percentage" value={formData.qualification.twelfthPercentage || ''} onChange={(e) => setFormData({ ...formData, qualification: { ...formData.qualification, twelfthPercentage: e.target.value } })} />
            <label htmlFor="twelfthYear">Year of Passing:</label>
            <input type="text" id="twelfthYear" placeholder="Year of Passing" value={formData.qualification.twelfthYear || ''} onChange={(e) => setFormData({ ...formData, qualification: { ...formData.qualification, twelfthYear: e.target.value } })} />
          </div>
          <div className='sect'>
            <h3>Graduation Details</h3>
            <label htmlFor="graduationCollege">College Name:</label>
            <input type="text" id="graduationCollege" placeholder="College Name" value={formData.qualification.graduationCollege || ''} onChange={(e) => setFormData({ ...formData, qualification: { ...formData.qualification, graduationCollege: e.target.value } })} />
            <label htmlFor="graduationPercentage">Percentage:</label>
            <input type="text" id="graduationPercentage" placeholder="Percentage" value={formData.qualification.graduationPercentage || ''} onChange={(e) => setFormData({ ...formData, qualification: { ...formData.qualification, graduationPercentage: e.target.value } })} />
            <label htmlFor="graduationYear">Year of Passing:</label>
            <input type="text" id="graduationYear" placeholder="Year of Passing" value={formData.qualification.graduationYear || ''} onChange={(e) => setFormData({ ...formData, qualification: { ...formData.qualification, graduationYear: e.target.value } })} />
          </div>
          <div class="btn">
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handlePreview}>Preview</button>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="form-container">
          {renderFormData()}
          <button onClick={handlePrevious}>Back</button>
          {/* <button onClick={handleSubmit}>Submit</button> */}
        </div>
      )}

      {/* {step === 5 && renderFormData()} */}
    </div>
  );
};

export default App;
