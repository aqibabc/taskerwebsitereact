import React from 'react'
import logo from '../../Assets/images/header/logo.png'
import twitter from '../../Assets/images/twitter.png'
import google from '../../Assets/images/google.png'
import facebook from '../../Assets/images/facebook.png'
import instagram from '../../Assets/images/instagram.png'
import linked from '../../Assets/images/linked.png'

export default function Footer() {
  return (
    <>
      <div className="shadow py-2 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 col-lg-5">
              <img src={logo} className="w-25 ms-2 mb-3" />
              <p><span className="text-primary">&copy;</span> Tasker Web is a versatile automation platform that empowers users to create custom workflows and automate tasks across various devices and applications.</p>
              <div className="row">
                <div className="col d-flex my-3">
                  <img src={facebook} className="mx-2" />
                  <img src={google} className="mx-2" />
                  <img src={linked} className="mx-2" />
                  <img src={instagram} className="mx-2" />
                  <img src={twitter} className="mx-2" />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-7 col-lg-7">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-3">
                  <h3 className="fw-bold">Tasker</h3>
                  <p className="text-body-tertiary hovereffect">Home</p>
                  <p className="text-body-tertiary hovereffect">Product</p>
                  <p className="text-body-tertiary hovereffect">What’s New</p>
                  <p className="text-body-tertiary hovereffect">Pricing</p>
                  <p className="text-body-tertiary hovereffect">Premium</p>
                  <p className="text-body-tertiary hovereffect">Business</p>
                  <p className="text-body-tertiary hovereffect">Enterprise</p>
                  <p className="text-body-tertiary hovereffect">Customer Success</p>
                  <p className="text-body-tertiary hovereffect">Asana Templates</p>
                  <p className="text-body-tertiary hovereffect">Trust & Security</p>
                  <p className="text-body-tertiary hovereffect">Status</p>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <h3 className="fw-bold">Solutions</h3>
                  <p className="text-body-tertiary hovereffect">Enterprise</p>
                  <p className="text-body-tertiary hovereffect">Small business</p>
                  <p className="text-body-tertiary hovereffect">Personal use</p>
                  <p className="text-body-tertiary hovereffect">Remote work</p>
                  <p className="text-body-tertiary hovereffect">Startups</p>
                  <p className="text-body-tertiary hovereffect">Education</p>
                  <p className="text-body-tertiary hovereffect">Nonprofits</p>
                  <p className="text-body-tertiary hovereffect">Engineering</p>
                  <p className="text-body-tertiary hovereffect">Product</p>
                  <p className="text-body-tertiary hovereffect">Design</p>
                  <p className="text-body-tertiary hovereffect">Managers</p>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <h3 className="fw-bold">Download</h3>
                  <p className="text-body-tertiary hovereffect">iOS & Android</p>
                  <p className="text-body-tertiary hovereffect">Web Clipper</p>
                  <h5 className="fw-bold">Build</h5>
                  <p className="text-body-tertiary hovereffect">Integrations</p>
                  <p className="text-body-tertiary hovereffect">Templates</p>
                  <p className="text-body-tertiary hovereffect">API docs</p>
                  <p className="text-body-tertiary hovereffect">Guides & tutorials</p>
                  <p className="text-body-tertiary hovereffect">Find a consultant</p>
                  <p className="text-body-tertiary hovereffect">Become an affiliate</p>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                  <h3 className="fw-bold">Get started</h3>
                  <p className="text-body-tertiary hovereffect">Switch from Asana</p>
                  <p className="text-body-tertiary hovereffect">Switch from Evernote</p>
                  <h5 className="fw-bold">Resources</h5>
                  <p className="text-body-tertiary hovereffect">Pricing</p>
                  <p className="text-body-tertiary hovereffect">About us</p>
                  <p className="text-body-tertiary hovereffect">Careers</p>
                  <p className="text-body-tertiary hovereffect">Media kit</p>
                  <p className="text-body-tertiary hovereffect">Email us</p>
                  <p className="text-body-tertiary hovereffect">Cookie settings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
