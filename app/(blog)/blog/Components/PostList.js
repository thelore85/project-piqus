import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { notFound } from "next/navigation"
export const dynamic = 'force-dynamic' // force db refrech

// Components
import PostCard from './PostCard'


const getPosts = async () => {
  const supabase = createServerComponentClient({ cookies })
  const { data: posts } = await supabase.from('piqus_blog_post')
    .select() 

  if (!posts) { notFound() }
    return posts
}



export default async function PostList() {

  const posts = await getPosts()

  return (
    <div className="container my-5 p-3">
      <div className="row">

        {(posts.map((post, index) => { 
          return <PostCard key={index} post={post}/>
        }))}

      </div>
    </div>
  )
}
