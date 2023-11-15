
import Link from "next/link";

export default function Dropdown() {
  return (
    <>
      <ul className="navbar-nav mb-2 me-auto mb-lg-0 small fw-lighter">
        
        <li className="nav-item dropdown me-3">
          <Link className="text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </Link>

          <ul className="dropdown-menu small fw-lighter">
            <li className="dropdown-item">
              <Link className="active" aria-current="page" href="/#website">Website</Link>
            </li>
            <li className="dropdown-item">
              <Link className="active" aria-current="page" href="/#ecommerce">Ecommerce</Link>
            </li>
            <li className="dropdown-item">
              <Link className="active" aria-current="page" href="/#webapp">Web App</Link>
            </li>
            <li className="dropdown-item">
              <Link className="active" aria-current="page" href="/#marketing">Marketing</Link>
            </li>
          </ul>
        </li>

        <li className="nav-item me-3">
          <Link className="text-light" aria-current="page" href="/#about">About</Link>
        </li>


      </ul>

    </>
  )
}
