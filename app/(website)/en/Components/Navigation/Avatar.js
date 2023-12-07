
import Link from "next/link"
import LogoutButton from "../Buttons/LogoutButton"
import Image from "next/image";


export const dynamic = 'force-dynamic' // force db refrech


export default function Avatar({ session }) {

  return (
    <div className="dropdown dropdown-menu-sm-end dropdown-menu-md-start">
      <div href="#" className=" border-top d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <span className="text-white fw-lighter small me-2">
          {session?.user.email}
        </span>
        <Image src="/img/user_img.jpg" alt="mdo" width="32" height="32" className="rounded-circle" />
      </div>
      <ul className="dropdown-menu p-0">
        <li><Link className="dropdown-item border-bottom text-primary py-2 fw-bold small" href={ `/en/profile/${session?.user.id}`} >My Profile</Link></li>
        <li><Link className="dropdown-item py-2 small" href="/en/profile/newproject">New Project</Link></li>
        <li><Link className="dropdown-item py-2 small" href="/en/auth/reset-password">Reset Password</Link></li>
        <li><Link href="#" className="dropdown-item text-black-50 py-2 border-top small"><LogoutButton /></Link></li>
      </ul>
    </div>
  )
}