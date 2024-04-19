import React, { useState } from 'react';

const QualificationForm = ({ onSubmit, onPrevious }) => {
  const [tenthSchool, setTenthSchool] = useState('');
  const [tenthPercentage, setTenthPercentage] = useState('');
  const [tenthYear, setTenthYear] = useState('');
  const [twelfthSchool, setTwelfthSchool] = useState('');
  const [twelfthPercentage, setTwelfthPercentage] = useState('');
  const [twelfthYear, setTwelfthYear] = useState('');
  const [graduationCollege, setGraduationCollege] = useState('');
  const [graduationPercentage, setGraduationPercentage] = useState('');
  const [graduationYear, setGraduationYear] = useState('');

  const handleSubmit = () => {
    localStorage.setItem('tenthSchool', tenthSchool);
    localStorage.setItem('tenthPercentage', tenthPercentage);
    localStorage.setItem('tenthYear', tenthYear);
    localStorage.setItem('twelfthSchool', twelfthSchool);
    localStorage.setItem('twelfthPercentage', twelfthPercentage);
    localStorage.setItem('twelfthYear', twelfthYear);
    localStorage.setItem('graduationCollege', graduationCollege);
    localStorage.setItem('graduationPercentage', graduationPercentage);
    localStorage.setItem('graduationYear', graduationYear);
    onSubmit();
  };

  return (
    <div className="form-container">
      <h2>Educational Qualifications</h2>
      <div>
        <h3>10th Details</h3>
        <input type="text" placeholder="School Name" value={tenthSchool} onChange={(e) => setTenthSchool(e.target.value)} />
        <input type="text" placeholder="Percentage" value={tenthPercentage} onChange={(e) => setTenthPercentage(e.target.value)} />
        <input type="text" placeholder="Year of Passing" value={tenthYear} onChange={(e) => setTenthYear(e.target.value)} />
      </div>
      <div>
        <h3>12th Details</h3>
        <input type="text" placeholder="School Name" value={twelfthSchool} onChange={(e) => setTwelfthSchool(e.target.value)} />
        <input type="text" placeholder="Percentage" value={twelfthPercentage} onChange={(e) => setTwelfthPercentage(e.target.value)} />
        <input type="text" placeholder="Year of Passing" value={twelfthYear} onChange={(e) => setTwelfthYear(e.target.value)} />
      </div>
      <div>
        <h3>Graduation Details</h3>
        <input type="text" placeholder="College Name" value={graduationCollege} onChange={(e) => setGraduationCollege(e.target.value)} />
        <input type="text" placeholder="Percentage" value={graduationPercentage} onChange={(e) => setGraduationPercentage(e.target.value)} />
        <input type="text" placeholder="Year of Passing" value={graduationYear} onChange={(e) => setGraduationYear(e.target.value)} />
      </div>
      <button onClick={onPrevious}>Previous</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default QualificationForm;