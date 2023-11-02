import Link from "next/link";

export default function Navigation() {
  return (
    <ul className="navbar-nav mb-2 me-auto mb-lg-0 small">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" href="/#features">Services</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" href="/#tech">Tech</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" href="/#about">About</Link>
      </li>
    </ul>
  )
}
