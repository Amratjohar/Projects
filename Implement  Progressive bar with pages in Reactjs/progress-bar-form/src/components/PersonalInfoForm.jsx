import React, { useState } from 'react';

const PersonalInfoForm = ({ onNext }) => {
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [mobile, setMobile] = useState('');
      const [gender, setGender] = useState('');
      const [dob, setDob] = useState('');
    
      const handleNext = () => {
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('mobile', mobile);
        localStorage.setItem('gender', gender);
        localStorage.setItem('dob', dob);
        onNext();
      };
    
      return (
        <div className="form-container">
          <h2>Personal Information</h2>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
          <div>
            <label>Gender:</label>
            <input type="radio" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} /> Male
            <input type="radio" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} /> Female
          </div>
          <input type="date" placeholder="Date of Birth" value={dob} onChange={(e) => setDob(e.target.value)} />
          <button onClick={handleNext}>Next</button>
        </div>
      );
    };

    export default PersonalInfoForm;
