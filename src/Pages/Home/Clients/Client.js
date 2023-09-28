import React from 'react';
import Client1 from '../../../Assets/images/client/1.png'
import Client2 from '../../../Assets/images/client/2.png'

export default function index() {
    return (
        <>
            <div className="client bg py-3">
                <div className="text-center my-4">
                    <p className="text-primary my-2">Testimonials</p>
                    <h2 className="fw-bold">Check What Our Clients <br />Think About Us</h2>
                </div>
                <div id="carouselExampleIndicators" className="carousel slide">
                    <div class="carousel-indicators mb-0">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="bg-dark rounded-gol active " aria-current="true" aria-label="Slide 1"></button>
                        <button className="rounded-gol bg-dark" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button className="rounded-gol bg-dark" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button className="rounded-gol bg-dark" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div class="carousel-inner">
                    <div class="carousel-item active mb-5">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-8 col-lg-4 mb-3">
                                <div class="testimonial">
                                    <span class="open quote">“</span>
                                    <div class="image">
                                        <img src={Client1} />
                                    </div>
                                    <p className="fs-6 mb-5">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy <br />voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                                    <div class="source mt-5">
                                        <span>John Smith</span>
                                    </div>
                                    <span class="close quote">”</span>
                                </div>
                            </div>
                            <div className="col-12 col-md-8 col-lg-4 mb-3">
                                <div class="testimonial">
                                    <span class="open quote">“</span>
                                    <div class="image">
                                        <img src={Client2} />
                                    </div>
                                    <p className="fs-6 mb-5">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy <br />voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                                    <div class="source mt-5">
                                        <span>John Rolfe</span>
                                    </div>
                                    <span class="close quote">”</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item mb-5">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-8 col-lg-4 mb-3">
                                <div class="testimonial">
                                    <span class="open quote">“</span>
                                    <div class="image">
                                        <img src={Client1} />
                                    </div>
                                    <p className="fs-6 mb-5">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy <br />voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                                    <div class="source mt-5">
                                        <span>John Smith</span>
                                    </div>
                                    <span class="close quote">”</span>
                                </div>
                            </div>
                            <div className="col-12 col-md-8 col-lg-4 mb-3">
                                <div class="testimonial">
                                    <span class="open quote">“</span>
                                    <div class="image">
                                        <img src={Client2} />
                                    </div>
                                    <p className="fs-6 mb-5">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy <br />voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                                    <div class="source mt-5">
                                        <span>John Rolfe</span>
                                    </div>
                                    <span class="close quote">”</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item mb-5">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-8 col-lg-4 mb-3">
                                <div class="testimonial">
                                    <span class="open quote">“</span>
                                    <div class="image">
                                        <img src={Client1} />
                                    </div>
                                    <p className="fs-6 mb-5">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy <br />voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                                    <div class="source mt-5">
                                        <span>John Smith</span>
                                    </div>
                                    <span class="close quote">”</span>
                                </div>
                            </div>
                            <div className="col-12 col-md-8 col-lg-4 mb-3">
                                <div class="testimonial">
                                    <span class="open quote">“</span>
                                    <div class="image">
                                        <img src={Client2} />
                                    </div>
                                    <p className="fs-6 mb-5">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy <br />voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                                    <div class="source mt-5">
                                        <span>John Rolfe</span>
                                    </div>
                                    <span class="close quote">”</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item mb-5">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-8 col-lg-4 mb-3">
                                <div class="testimonial">
                                    <span class="open quote">“</span>
                                    <div class="image">
                                        <img src={Client1} />
                                    </div>
                                    <p className="fs-6 mb-5">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy <br />voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                                    <div class="source mt-5">
                                        <span>John Smith</span>
                                    </div>
                                    <span class="close quote">”</span>
                                </div>
                            </div>
                            <div className="col-12 col-md-8 col-lg-4 mb-3">
                                <div class="testimonial">
                                    <span class="open quote">“</span>
                                    <div class="image">
                                        <img src={Client2} />
                                    </div>
                                    <p className="fs-6 mb-5">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy <br />voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                                    <div class="source mt-5">
                                        <span>John Rolfe</span>
                                    </div>
                                    <span class="close quote">”</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}