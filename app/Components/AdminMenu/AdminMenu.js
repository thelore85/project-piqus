import Link from "next/link"

export default function AdminMenu() {
  return (
      <div className="nav-scroller bg-dark shadow-sm">
        <div className="container">

          <nav className="nav text-white" aria-label="Secondary navigation">
            <Link className="nav-Link p-2 small fw-lighter" href="/dashboard/">Dashboard</Link>
            <Link className="nav-Link p-2 small fw-lighter" href="/users">Users</Link>
            <Link className="nav-Link p-2 small fw-lighter" href="/tickets">Projects</Link>
            <Link className="nav-Link p-2 small fw-lighter" href="/profile/newproject">New Project</Link>
          </nav>

        </div>
     </div>
  )
  }