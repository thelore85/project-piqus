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
      <ul className="navbar-nav mb-2 me-auto mb-lg-0 small fw-light">
        <li className="nav-item dropdown m-2">
          <Link className="text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </Link>

          <ul className="dropdown-menu small fw-normal text-primary px-4 mt-2 " style={{width:'auto', minWidth:"350px", listStyle:"disc"}}>
            <li className="m-2">
              <Link className="" aria-current="page" href="/en/web-developing">Web Developing</Link>
            </li>
            <li className="m-2">
              <Link className="" aria-current="page" href="/en/marketing-online">Online Marketing</Link>
            </li>
          </ul>
        </li>

        <li className="nav-item m-2 ">
          <Link className="text-light" aria-current="page" href="/it/home/#about">About</Link>
        </li>
        <li className="nav-item m-2 ">
          <Link className="text-light" aria-current="page" href="/it/home/#portfolio">Portfolio</Link>
        </li>
      </ul>
  )
}
