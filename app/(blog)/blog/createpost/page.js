import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'


// Components
import CreatePostTitle from '../Components/CreatePostTitle'
import CreatePostForm from '../Components/CreatePostForm'


export default async function createPostPage() {

  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.auth.getSession()

  if(!data.session){ redirect(`/signup`) }  //protect the page from non logged-in users 

  return (
    <>
      <CreatePostTitle />
      <CreatePostForm />
    </>
  )
}
