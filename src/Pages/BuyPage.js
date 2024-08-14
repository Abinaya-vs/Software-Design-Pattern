import React, { useState } from 'react';
import './BuyPage.css';

const Step1 = ({ formData, setFormData, nextStep }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Step 1</h2>

      <div className="form-group">
        <label>Type of Ad </label>  {/* Value ====> Current value entered in the input field*/}
        <input type="text" name="bookinfo" value={formData.adType} 
          onChange={handleChange}/>
      </div>

      <div className="form-actions">
        <button onClick={nextStep}>Next</button>
      </div>
    </div>
  );
};

const Step2 = ({ formData, setFormData, prevStep, nextStep }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
    <div className='boxx'>
      <h2>Step 2</h2>
      <div className="form-group">
        <label>Price Type </label>
        <select
          name="priceType"
          value={formData.priceType}
          onChange={handleChange}
        >
          <option value="Fixed">Fixed</option>
          <option value="Negotiable">Negotiable</option>
        </select>
      </div>
      <div className="form-group">
        <label>Price *</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
      </div>
      <div className="form-actions">
        <button onClick={prevStep}>Previous</button>
        <button onClick={nextStep}>Next</button>
      </div>
    </div>
    </div>
  );
};

const Step3 = ({ formData, setFormData, prevStep }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Step 3</h2>
      <div className="form-group">
        <label>Item Condition *</label>
        <input
          type="text"
          name="itemCondition"
          value={formData.itemCondition}
          onChange={handleChange}
        />
      </div>
      <div className="form-actions">
        <button onClick={prevStep}>Previous</button>
        <button type="submit">Submit</button>
      </div>
    </div>
  );
};

const BuyPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    adType: '',
    priceType: '',
    price: '',
    itemCondition: '',
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="form-container">
      <div className="step-indicator">
        <div className={step === 1 ? 'active' : ''}>Step 1</div>
        <div className={step === 2 ? 'active' : ''}>Step 2</div>
        <div className={step === 3 ? 'active' : ''}>Step 3</div>
      </div>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />
        )}
        {step === 2 && (
          <Step2
            formData={formData}
            setFormData={setFormData}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        )}
        {step === 3 && (
          <Step3
            formData={formData}
            setFormData={setFormData}
            prevStep={prevStep}
          />
        )}
      </form>
    </div>
  );
};

export default BuyPage;
