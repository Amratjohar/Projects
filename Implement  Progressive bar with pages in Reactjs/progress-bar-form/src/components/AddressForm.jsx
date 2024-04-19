import React, { useState } from 'react';

const AddressForm = ({ onNext, onPrevious }) => {
  const [correspondenceAddress, setCorrespondenceAddress] = useState('');
  const [permanentAddress, setPermanentAddress] = useState('');

  const handleNext = () => {
    localStorage.setItem('correspondenceAddress', correspondenceAddress);
    localStorage.setItem('permanentAddress', permanentAddress);
    onNext();
  };

  return (
    <div className="form-container">
      <h2>Address Information</h2>
      <input type="text" placeholder="Correspondence Address" value={correspondenceAddress} onChange={(e) => setCorrespondenceAddress(e.target.value)} />
      <input type="text" placeholder="Permanent Address" value={permanentAddress} onChange={(e) => setPermanentAddress(e.target.value)} />
      <button onClick={onPrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default AddressForm;