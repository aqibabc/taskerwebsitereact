import React from 'react';
import featur from '../../../Assets/images/feature/feature-1.png'

export default function Feature() {
  return (
    <>
      <div className="feature">
        <div className="py-3">
          <div className="container">
            <div className="row">
              <div className="col-12 pt-5 col-md-6 col-lg-6">
                <div className="feature-text mt-5">
                  <p className="text-primary">Learn about Features</p>
                  <h2 className="fw-bold">Boost Your Productivity <br />And Management</h2>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing, sed <br />diam nonumy eirmod tempor invidunt ut labore et dolor <br />magna aliquyam.</p>
                  <button class="btn btn-primary mt-3 mb-4 px-4" type="submit">Get Start</button>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <img src={featur} className="w-100 ms-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
