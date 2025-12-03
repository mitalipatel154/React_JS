import React from "react";
import dealImg from '../assets/images/deal/deal-img1.jpg';

function Deal() {
  return (
    <section className="deal-section deal-bg container-fluid my-5 p-0">
      <div className="row g-0 align-items-center">

        <div className="col-md-4 deal-left p-5 ms-auto">
          <p className="text-uppercase fw-bold text-danger mb-2 snd-font">
            YOUR NEED IT
          </p>

          <h1 className="display-3 fw-semibold">Deal Of The Week</h1>

          <p className="fw-bold mt-3 snd-font">
            NEW DEAL EVERY WEEK! HURRY UP!
          </p>

          <div className="d-flex gap-4 mt-4 snd-font text-uppercase">
            {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
              <div key={index} className="text-center">
                <div className="timer-box">{`00`}</div>
                <small className="fw-bold mt-2 d-block">{label}</small>
              </div>
            ))}
          </div>

          <button className="bg-black text-white border border-0 px-4 py-3 px-5 mt-4 fw-semibold rounded-0 snd-font">
            <span>SHOP NOW</span>
          </button>
        </div>

        <div className="col-md-5 deal-right position-relative ms-auto">
          <img src={dealImg} className="img-fluid h-100 object-fit-cover" alt="Bracelet" />

          <div className="discount-box text-center">
            <p className="fw-bold mb-0">
              <span className="fs-3">20%</span> OFF
            </p>
            <small className="text-uppercase">Limited Time</small>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Deal;
