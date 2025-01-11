import React, { useContext, useEffect, useState } from 'react';
import { NameContext } from '../Context/UserRegContext';
import { useNavigate } from 'react-router-dom';
import { Success } from '../Components/Success';

export const Pricing = () => {
  const { saveUserPlanData, completeUserData } = useContext(NameContext);
  const navigate = useNavigate();


  const handleSelectedPlan = (plan) => {
    saveUserPlanData(plan);
    alert(`You have selected the ${plan} plan!`);
    navigate('/success'); // Adjust this to your desired route
  };


  return (
    <div
      className="container text-align-center justify-items-center align-items-center"
      style={{ height: '100vh', width: '90%', alignItems: 'center', alignContent: 'center' }}
    >
      <div className="text-align-center mb-4" style={{ textAlign: 'center' }}>
        <h1
          className="text-center fw-bold"
          style={{ color: 'rgb(67,83,255)', textShadow: '1px 2px black' }}
        >
          Welcome Buddy !
        </h1>
        <p className='text-white' style={{ width: '78%', marginLeft: '12%' }}>
          "Welcome to the Plans Page! We're excited to have you here. Explore our plans and choose
          the one that fits your needs. Select a plan to continue your journey with us!"
        </p>
      </div>

      <div className="card-group align-items-center p-0">
        {['Free', 'Pro', 'Advanced'].map((plan, index) => (
          <div key={index} className="card mx-3" style={{ boxShadow: '2px 2px 8px black' }}>
            <h5
              className="card-header p-3"
              style={{
                backgroundColor: 'rgb(67,83,255)',
                color: 'white',
                boxShadow: '2px 2px 8px black',
                textAlign: 'center',
              }}
            >
              {plan.toUpperCase()}
            </h5>
            <div className="card-body">
              <h5 className="card-title text-center">
                {plan === 'Free'
                  ? '[ Free/24hrs ]'
                  : plan === 'Pro'
                  ? '[ Rs 999/mon ]'
                  : '[ Rs 3499/mon ]'}
              </h5>
              <hr />
              <p className="card-text">Max file size : 5 MB</p>
              <hr />
              <p className="card-text">OCR Support : Yes</p>
              <hr />
              <p className="card-text">
                Customer Support : {plan === 'Free' ? 'No' : 'Yes'}
              </p>
              <hr />
              <p className="card-text">Total sessions : unlimited</p>
            </div>
            <div className="card-footer p-3" style={{ textAlign: 'center' }}>
              <button
                className="btn btn-primary px-5"
                onClick={() => handleSelectedPlan(plan)}
              >
                Select Plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
