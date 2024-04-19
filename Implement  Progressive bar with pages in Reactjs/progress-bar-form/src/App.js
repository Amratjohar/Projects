// App.js
import React from 'react';
import MultipleStepForm from './MultipleStepform';
import './App.css';
// import { Router } from 'react-router-dom';

const App = () => {
//   <Router>
//   {/* <h1>Multi-Step Form</h1> */}
//       <MultipleStepForm />
// </Router>
  return (
    <div>
      {/* <h1><a href="#" class="btn-shine" target="_blank">Form</a></h1> */}
      <MultipleStepForm />
    </div>
  );
};

export default App;








// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import PersonalInfoForm from './components/PersonalInfoForm';
// import AddressForm from './components/AddressForm';
// import QualificationForm from './components/QualificationForm';
// import DisplayInfoPage from './components/DisplayInfoPage';


// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" exact component={PersonalInfoForm} />
//         <Route path="/address" component={AddressForm} />
//         <Route path="/qualification" component={QualificationForm} />
//         <Route path="/display-info" component={DisplayInfoPage} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;