import React from 'react';
import './Section1.css';
var Diamond = require('./doctor.png');

function Section1 (){
    return (
      <div>
        <section id="home">
         <div className="container-fluid px-0 top-banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-6">
                        <h1>Feel better about finding healthcare</h1>
                        <p>From preventive care and checkups, to immunizations and exams, our primary care physicians and providers work to keep you and your whole family healthy and strong each and every day</p>
                        <div className="mt-4">
                          <button className="main-btn">Make a call</button>
                          <a href="http://127.0.0.1:5000/" target="__blank"><button className="white-btn ms-lg-4 mt-lg-0 mt-4">Take a survey <i class="fas fa-angle-right ps-4"></i></button></a>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6">
                        <img src={Diamond} alt=""/>
                    </div>
                </div>
            </div>
         </div>
        </section>
      </div>
    );
}

export default Section1;