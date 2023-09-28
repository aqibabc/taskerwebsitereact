import React from 'react';
import Image from '../../../Assets/images/q.png';

export default function Faqs() {

    return (
        <>
            <div className="py-5 mb-5">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col">
                            <div className="text-center">
                                <p className="text-primary my-4">FAQ'S</p>
                                <h2 className="fw-bold">Commonly Asked Questions</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 col-lg-6">
                            <div class="btn-group w-100 my-3 border rounded">
                                <button type="button" class="p-4 px-5 btn btn dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">Q1 . What's your name?   </button>
                                <ul class="dropdown-menu dropdown-menu-lg-end w-100">
                                    <p className="text-center pt-2">My Name is Aqib Zahid</p>
                                </ul>
                            </div>
                            <div class="btn-group w-100 my-3 border rounded">
                                <button type="button" class="p-4 px-5 btn btn dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">Q2 . Where are you from?   </button>
                                <ul class="dropdown-menu dropdown-menu-lg-end w-100">
                                    <p className="text-center pt-2">I'm From Faisalabad</p>
                                </ul>
                            </div>
                            <div class="btn-group w-100 my-3 border rounded">
                                <button type="button" class="p-4 px-5 btn btn dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">Q3 . What do you do?   </button>
                                <ul class="dropdown-menu dropdown-menu-lg-end w-100">
                                    <p className="text-center pt-2">I Do Web Development</p>
                                </ul>
                            </div>
                            <div class="btn-group w-100 mt-3 border rounded">
                                <button type="button" class="p-4 px-5 btn btn dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">Q4 . How can I help you?   </button>
                                <ul class="dropdown-menu dropdown-menu-lg-end w-100">
                                    <p className="text-center pt-2">I Can Help You With Web Dvelopment</p>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-7 col-lg-6">
                            <img src={Image} className="img-thumbnail border-0" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="text-white shadow text-center bg-primary rounded-5 pb-5">
                            <div className="col-12 pt-3">
                                <p>Get Latest Updates</p>
                                <h2 className="fw-bold">Subscribe To Our Newsletter</h2>
                                <p className="mb-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed <br /> diam nonumy eirmod tempor </p>
                                <div className="mx-auto">
                                    <div className="row">
                                        <div className="col">
                                            <input type="email" className="bg-transparent text-white my-2 form-control w-50 mx-auto" placeholder="Email" />
                                            <button className="my-2 btn btn-light rounded-1">Subscribe Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}