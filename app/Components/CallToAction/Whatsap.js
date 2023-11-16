import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function Whatsap({ size }) {
  return (
    
      <Link href='https://api.whatsapp.com/send/?phone=393933222446&text&type=phone_number&app_absent=0' target="_black" className={`btn btn-${size ?? 'md'}  btn-light border-primary text-primary m-2`}>
        <FontAwesomeIcon icon={faWhatsapp} className="me-2"/>Contact
      </Link>
    
  )
}
