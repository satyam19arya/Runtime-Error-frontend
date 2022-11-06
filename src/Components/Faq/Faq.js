import React from 'react';
import './Faq.css';


function Faq() {
    return (
    <div>
    <section id="faq">
      <div className="faq wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="text-center mb-5">
                <h2>Frequently Asked Questions</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div class="col-sm-6 mb-4">
              <h4><span>~</span>How do I read health score Report?</h4>
              <p>Your health score is calculated based on your lifestyle as reflected in the score section, ranges between 0-1000. A score above 800 is generally considered good.</p>
            </div>
            <div className="col-sm-6 mb-4">
              <h4><span>~</span>How do heath score affect me?</h4>
              <p>The better the health score, less is the premium and more is the coverage</p>
            </div>
            <div className="col-sm-6 mb-4">
              <h4><span></span>I already have high health score. Why should I consider buying a health policy?</h4>
              <p>Due to high insurance premium on health policies, you may avoid taking health plan when you have high health score. But, the thing is health insurance is for those times also when your health score may go down and at that time, you won't be able to buy health insurance and avail insurance benefits</p>
            </div>
            <div className="col-sm-6 mb-4">
              <h4><span>~</span>Should I check my score health before buying an insurance?</h4>
              <p>Yes. Insurance company can consider your health score as an indicator of the credibility of your insurance claim. To lower the chances of rejection of your insurance claim, you must check your health score before applying. Knowing your health score in advance will help you prepare for the outcome.</p>
            </div>
          </div>
        </div>
      </div>
    </section> 
    </div>
    );
}

export default Faq;