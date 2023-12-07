import Link from 'next/link'

export default function StartNow( {size} ) {
  return (

      <Link href='/en/auth/login' className={`btn btn-${size ?? 'md' } btn-primary m-1`}>Start Now</Link>
    
  )
}
