import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <li className="dropdown-item mb-2 ">
        <Link className="small" aria-current="page" href="/en/marketing-online">Marketing</Link>
      </li>
      <li className="dropdown-item mb-2">
        <Link className="small" aria-current="page" href="/#website">Website</Link>
      </li>
      <li className="dropdown-item mb-2">
        <Link className="small" aria-current="page" href="/#ecommerce">Ecommerce</Link>
      </li>
      <li className="dropdown-item mb-2">
        <Link className="small" aria-current="page" href="/#webapp">Web App</Link>
      </li>
    </>
  )
}
