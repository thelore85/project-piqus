import logo from '@/public/img/logo/piqus-logo-white.png'

// Components
import Link from 'next/link';
import Image from 'next/image';

export default function LogoOrizontal() {
  return (
    <div>
      <Link className="navbar-brand fs-4 me-4 d-inline-block" href="/it/home">
        <Image src={logo} alt="Piqus" width="30" className="text-primary rounded me-3"/><span>PIQUS</span>
      </Link>
    </div>
  )
}
