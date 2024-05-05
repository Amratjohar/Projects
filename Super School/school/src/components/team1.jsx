import React from "react";
import "./style1.css";
import img1 from '../images/image-1.png'
import img2 from '../images/image-2.png'
import img3 from '../images/image-3.png'

function team1() {
  return (
    <>
        <h3>Our Team</h3>
      <div className="team1">
        <div className="person" style={{ "--color": "#782a2b" }}>
          <div className="container">
            <div className="container-inner">
              <div className="circle" />
              <img src={img1} />
            </div>
          </div>
          <div className="divider" />
          <h1>Xyz</h1>
          <p>Director</p>
        </div>
        <div className="person" style={{ "--color": "#37375e" }}>
          <div className="container">
            <div className="container-inner">
              <div className="circle" />
              <img src={img2} />
            </div>
          </div>
          <div className="divider" />
          <h1>Pqr</h1>
          <p>Vice Principal</p>
        </div>
        <div className="person" style={{ "--color": "#3e6e7c" }}>
          <div className="container">
            <div className="container-inner">
              <div className="circle" />
              <img src={img3} />
            </div>
          </div>
          <div className="divider" />
          <h1>Abc</h1>
          <p>Committee Member</p>
        </div>
        <div className="person" style={{ "--color": "#3e6e7c" }}>
          <div className="container">
            <div className="container-inner">
              <div className="circle" />
              <img src={img3} />
            </div>
          </div>
          <div className="divider" />
          <h1>Abc</h1>
          <p>Committee Member</p>
        </div>
        <div className="person" style={{ "--color": "#3e6e7c" }}>
          <div className="container">
            <div className="container-inner">
              <div className="circle" />
              <img src={img3} />
            </div>
          </div>
          <div className="divider" />
          <h1>Abc</h1>
          <p>Committee Member</p>
        </div>
        <div className="person" style={{ "--color": "#3e6e7c" }}>
          <div className="container">
            <div className="container-inner">
              <div className="circle" />
              <img src={img3} />
            </div>
          </div>
          <div className="divider" />
          <h1>Abc</h1>
          <p>Committee Member</p>
        </div>
        
      </div>
    </>
  );
}

export default team1;
