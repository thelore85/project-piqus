import Link from 'next/link'

export default function StartNow( {size} ) {
  return (

      <Link href='/it/auth/login' className={`btn btn-${size ?? 'md' } btn-primary m-1`}>Nuovo progetto</Link>
    
  )
}
