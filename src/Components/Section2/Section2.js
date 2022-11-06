import React from 'react';
import './Section2.css';
var Diamond = require('./healthscore.jpg');

function Section2 () {
    return(
    <div>
    <section id="about">
      <div class="about-section wrapper">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-7 col-md-12 mb-lg-0 mb-5">
              <div class="card border-0">
                <img src={Diamond} class="img-fluid" alt=''/>
              </div>
            </div>
            <div class="col-lg-5 text-sec">
              <h2>What is a health score?</h2>
              <p>A customer health score is a metric used largely by customer success teams to determine whether customers are healthy or at-risk.</p>
              <a href="http://127.0.0.1:5000/" target="__blank"><button class="main-btn mt-3" href="http://127.0.0.1:5000/" target="__blank">Check now</button></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    );
}

export default Section2;