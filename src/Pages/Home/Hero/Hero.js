import React from 'react'
import HeroImage from '../../../Assets/images/hero/1.png'

export default function Hero() {
  return (
    <>
      <div className="bg">
        <div className="container">
          <div className="row py-5 px-3">
            <div className="col-12 col-md-7 col-lg-6 mb-3">
              <div className="hero-text mt-5">
                <h1 className="fw-bold">
                  Tasker brings all
                  <br />
                  your tasks Teams &
                  <br />
                  tools together
                </h1>
                <p className="fs-5">Keep everything in the same place—even if your  <br />team isn’t.</p>
                <form className="mt-5">
                  <div className="row">
                    <div className="col d-flex">
                      <input type="email" className=" w-50 form-control" placeholder="Email" />
                      <button className=" mx-2 py-2 btn btn-primary">Sign Up Its Free</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-6">
              <div className="hero-image">
                <img src={HeroImage} className="img-thumbnail border-0 h-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
