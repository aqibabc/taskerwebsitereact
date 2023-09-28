import React from 'react';
import Img1 from '../../../Assets/images/feature/1.png'
import Img2 from '../../../Assets/images/feature/2.png'
import Img3 from '../../../Assets/images/feature/3.png'
import Img4 from '../../../Assets/images/feature/4.png'

export default function Feature() {
  return (
    <>
      <div className="feature">
        <div className="bg py-5">
          <div className="container">
            <div className="row">
              <div className="col-12 pt-5 col-md-6 col-lg-6">
                <div className="feature-text mt-5">
                  <p className="text-primary">Learn about Features</p>
                  <h2 className="fw-bold">Our Top Features</h2>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing, sed <br />diam nonumy eirmod tempor invidunt ut labore et dolor <br />magna aliquyam.</p>
                  <button class="btn btn-primary mb-4 px-4" type="submit">Get Start</button>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="row">
                  <div className="col-12 col-md-12 col-lg-6">
                    <div className="card shadow py-4 p-2 rounded-4">
                      <div className="img-card rounded-3 p-2 bg-danger">
                        <img src={Img3} />
                      </div>
                      <h3 className="fw-bold fs-3 my-2">Tasks </h3>
                      <p className="fs-6">Lorem ipsum dolor sit, sconsetetur <br />sadipscing elitr, sed diam nonumy <br /> eirmod dummy text here.</p>
                    </div>
                  </div>
                  <div className="mt-3 col-12 col-md-12 col-lg-6">
                    <div className="card shadow py-4 p-2 rounded-4">
                      <div className="img-card rounded-3 p-2 bg-primary">
                        <img src={Img2} />
                      </div>
                      <h3 className="fw-bold fs-3 my-2">Time Slots</h3>
                      <p className="fs-6">Lorem ipsum dolor sit, sconsetetur <br />sadipscing elitr, sed diam nonumy <br /> eirmod dummy text here.</p>
                    </div>
                  </div>
                </div>
                <div className="row mt-3 ">
                  <div className="col-12 col-md-12 col-lg-6">
                    <div className="card shadow py-4 p-2 rounded-4">
                      <div className="img-card rounded-3 p-2 bg-success">
                        <img src={Img4} />
                      </div>
                      <h3 className="fw-bold fs-3 my-2">Onboarding</h3>
                      <p className="fs-6">Lorem ipsum dolor sit, sconsetetur <br />sadipscing elitr, sed diam nonumy <br /> eirmod dummy text here.</p>
                    </div>
                  </div>
                  <div className="mt-3 col-12 col-md-12 col-lg-6">
                    <div className="card shadow py-4 p-2 rounded-4">
                      <div className="img-card rounded-3 p-2 bg-warning">
                        <img src={Img1} />
                      </div>
                      <h3 className="fw-bold fs-3 my-2">Collaboration</h3>
                      <p className="fs-6">Lorem ipsum dolor sit, sconsetetur <br />sadipscing elitr, sed diam nonumy <br /> eirmod dummy text here.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
