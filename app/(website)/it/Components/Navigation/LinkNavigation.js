'use client'

import Link from "next/link";
import { useEffect } from "react";
// import 'bootstrap/dist/js/bootstrap.bundle.js' //import bootstrap 5 js


// Components

export default function LinkNavigation() {

// import bootstrap 5 javascript
useEffect(() => {
  require("bootstrap/dist/js/bootstrap.bundle.min.js");
}, []);
  
  return (
      <ul className="navbar-nav mb-2 me-auto mb-lg-0 small fw-lighter">
        <li className="nav-item dropdown me-3">
          <Link className="text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </Link>

          <ul className="dropdown-menu small fw-lighter">
            <li className="me-3">
              <Link className="" aria-current="page" href="/it/marketing-online">Marketing</Link>
            </li>
            <li className="me-3">
              <Link className="" aria-current="page" href="/it/home/#website">Web Developing</Link>
            </li>
            <li className="me-3">
              <Link className="" aria-current="page" href="/it/home/#ecommerce">Ecommerce</Link>
            </li>
          </ul>
        </li>

        <li className="nav-item me-3">
          <Link className="text-light" aria-current="page" href="/it/home/#about">About</Link>
        </li>
      </ul>
  )
}
