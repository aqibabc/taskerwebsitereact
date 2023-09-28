import React from 'react';
import Img1 from '../../../Assets/images/profomens.png'

export default function Feature() {
    return (
        <>
            <div className="prfomens">
                <div className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="mt-5 col-12 col-md-6 col-lg-6">
                                <div className="profomens-img mt-4">
                                    <img src={Img1} className="w-100" />
                                </div>
                            </div>
                            <div className="col-12 pt-5 col-md-6 col-lg-6">
                                <div className="prfomens-text text-end mt-5">
                                    <p className="text-primary">Perform Your All Tasks</p>
                                    <h2 className="fw-bold">Perform Your All Tasks
                                        <br /> At One Place</h2>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing, sed <br />diam nonumy eirmod tempor invidunt ut labore et dolor <br />magna aliquyam.</p>
                                    <button class="btn btn-primary my-5 px-4" type="submit">Get Start</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
