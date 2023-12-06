'use client'

import Link from "next/link";
import 'bootstrap/dist/js/bootstrap.bundle.js' //import bootstrap 5 js


// Components

export default function LinkNavigation() {


  return (
      <ul className="navbar-nav mb-2 me-auto mb-lg-0 small fw-lighter">
        <li className="nav-item dropdown me-3">
          <Link className="text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </Link>

          <ul className="dropdown-menu small fw-lighter">
            <li className="me-3">
              <Link className="" aria-current="page" href="/en/marketing-online">Marketing</Link>
            </li>
            <li className="me-3">
              <Link className="" aria-current="page" href="#website">Web Developing</Link>
            </li>
            <li className="me-3">
              <Link className="" aria-current="page" href="/#ecommerce">Ecommerce</Link>
            </li>
          </ul>
        </li>

        <li className="nav-item me-3">
          <Link className="text-light" aria-current="page" href="/#about">About</Link>
        </li>
        <li className="nav-item me-3">
          <Link className="text-light" aria-current="page" href="/blog">Blog</Link>
        </li>
      </ul>
  )
}
