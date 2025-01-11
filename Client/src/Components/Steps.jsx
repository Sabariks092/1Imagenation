import React from 'react';
import { stepsData } from '../assets/assets';

export const Steps = () => {
  return (
    <div className="mt-5">
      <hr style={{ color: "white" }} />
      <div className="text-center text-white">
        <h1 className="fw-bold mt-5">How it Works?</h1>
        <p>trandw, fmnsdkjfsu9dfswopdjfjsdojfnsdjobv</p>
      </div>
      <div className="text-white justify-content-center align-items-center">
        {stepsData.map((item, index) => (
          <div
            key={index}
            className="step-card col-12 d-flex row w-75 col-sm-8 col-md-6 col-lg-4 p-3 mb-3 mx-auto text-center"
          >
            <div>
              <img src={item.icon} alt="Step Icon" className="mb-3" />
            </div>
            <div>
              <h5 className="fw-bold">{item.title}</h5>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
