import { redirect } from 'next/navigation'

export default async function index() {
  return (
    redirect('/en')
  )
}
