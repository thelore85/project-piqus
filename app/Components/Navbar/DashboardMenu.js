import Link from "next/link"

export default function DashboardMenu() {
  return (
      <div className="nav-scroller bg-body shadow-sm">
        <div className="container">

          <nav className="nav" aria-label="Secondary navigation">
            <Link className="nav-Link p-2 small fw-light text-secondary" href="/dashboard/">Dashboard</Link>
            <Link className="nav-Link p-2 small fw-light text-secondary" href="/users">Users</Link>
            <Link className="nav-Link p-2 small fw-light text-secondary" href="/tickets">Projects</Link>
            <Link className="nav-Link p-2 small fw-light text-secondary" href="/tickets/create">New Project</Link>
          </nav>

        </div>
     </div>
  )
  }