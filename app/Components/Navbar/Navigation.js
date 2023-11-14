import Link from "next/link";

export default function Navigation() {
  return (
    <ul className="navbar-nav mb-2 me-auto mb-lg-0 small fw-lighter ">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" href="/#services">Services</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" href="/#ecommerce">Developing</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" href="/#ecommerce">Ecommerce</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" href="/#marketing">Marketing</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" href="/#about">About</Link>
      </li>
    </ul>
  )
}
