import React from 'react'
import l from '../../../Assets/images/logo/l.png'
import o from '../../../Assets/images/logo/o.png'
import g from '../../../Assets/images/logo/g.png'
import oo from '../../../Assets/images/logo/oo.png'
import one from '../../../Assets/images/logo/one.png'

export default function Logos() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="text-center my-5">
              <h1 className="fw-bolder">Trusted Clients </h1>
              <p className="mb-4 w-50 mx-auto">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et</p>
              <div>
                <img src={l} className="logo-img- logo-img-1" />
                <img src={o} className="logo-img- logo-img-2" />
                <img src={g} className="logo-img- logo-img-3" />
                <img src={oo} className="logo-img- logo-img-4" />
                <img src={one} className="logo-img-" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
