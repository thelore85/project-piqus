import Link from 'next/link'

export default function StartNow( {size} ) {
  return (

      <Link href='/login' className={`btn btn-${size ?? 'md' } btn-primary mx-2`}>Start Now</Link>
    
  )
}
