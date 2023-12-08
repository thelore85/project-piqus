import logo from '@/public/img/logo/piqus-logo-white.png'
import Image from 'next/image'

export default function LogoVertical() {
  return (
    <div className="">
      <Image alt="Piqus" src={logo} width="60" className="mb-3"/>
      <h5 className="mb-4">Think Big. Think Web.</h5>
    </div>
  )
}
