import logo from '@/public/img/logo/piqus-logo-white.png'

// Components
import Image from 'next/image';

export default function LogoOrizontal() {
  return (
    <div>
      <Image src={logo} alt="Piqus" width="150" className="text-primary rounded me-3"/>
    </div>
  )
}
