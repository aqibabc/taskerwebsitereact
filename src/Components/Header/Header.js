import React from 'react';
import Logo from '../../Assets/images/header/logo.png';
import WebIcon from '../../Assets/images/header/header-icon.png';
export default function Header() {
  return (
    <>
      <header className="bg">
        <nav class="navbar px-5 navbar-expand-lg">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src={Logo} />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-5 me-auto mb-2 mb-lg-0">
                <li class="nav-item fw-bold">
                  <a class="nav-link mx-1" aria-current="page" href="#">Product</a>
                </li>
                <li class="nav-item fw-bold">
                  <a class="nav-link mx-1" aria-current="page" href="#">Solutions</a>
                </li>
                <li class="nav-item fw-bold">
                  <a class="nav-link mx-1" aria-current="page" href="#">Resources</a>
                </li>
                <li class="nav-item fw-bold">
                  <a class="nav-link mx-1" aria-current="page" href="#">Enterprise</a>
                </li>
                <li class="nav-item fw-bold">
                  <a class="nav-link mx-1" aria-current="page" href="#">Pricing</a>
                </li>
              </ul>
              <form class="d-flex">
                <a href="#" className="mt-2">
                  <img src={WebIcon} />
                  </a>
                <li className="nav-item">
                  <a href="#" class=" contactbtn nav-link mt-2 ">Contact Sales</a>
                </li>
                <button class="btn px-4" type="submit">Login</button>
                <button class="btn btn-primary px-4" type="submit">Get Start</button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
