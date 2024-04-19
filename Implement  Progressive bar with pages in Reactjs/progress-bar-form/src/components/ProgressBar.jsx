// import React from 'react';
// import PersonalInfoForm from './PersonalInfoForm';
// import AddressForm from './AddressForm';
// import QualificationForm from './QualificationForm';

// const ProgressBar = ({ progress, stepNames }) => {
//   const segmentWidth = 100 / (stepNames.length - 1);

//   return (
//     <div className="progress-bar">
//       <div className="progress-names">
//         {stepNames.map((stepName, index) => (
//           <div key={index} className="step-name">{stepName}</div>
//         ))}
//       </div>
//       <div className="progress-line-container">
//         <div className="progress-line" style={{ width: `${progress}%` }}></div>
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   const [step, setStep] = React.useState(1);

//   const handleNext = () => {
//     setStep(step + 1);
//   };

//   const handlePrevious = () => {
//     setStep(step - 1);
//   };

//   const handleSubmit = () => {
//     window.location.href = 'displayInfo'; // Redirect to display page
//   };

//   const stepNames = ['Personal Information', 'Address Details', 'Qualification Details'];

//   return (
//     <div className="app-container">
//       <ProgressBar progress={(step - 1) * (100 / (stepNames.length - 1))} stepNames={stepNames} />
//       {step === 1 && <PersonalInfoForm onNext={handleNext} />}
//       {step === 2 && <AddressForm onNext={handleNext} onPrevious={handlePrevious} />}
//       {step === 3 && <QualificationForm onSubmit={handleSubmit} onPrevious={handlePrevious} />}
//     </div>
//   );
// };

// export default ProgressBar;