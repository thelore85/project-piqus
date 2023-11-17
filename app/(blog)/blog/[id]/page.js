import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { notFound } from "next/navigation"
export const dynamic = 'force-dynamic'


// Components
import PostContent from "../Components/PostContent";
import PostIndex from '../Components/PostIndex';
import PostTitle from '../Components/PostTitle';


const getPost = async (id) => {
  const supabase = createServerComponentClient({ cookies })
  const { data: post } = await supabase.from('piqus_blog_post')
    .select()
    .eq('id', id)
    .single()
 
  console.log('debugging post id page: ', post)

  if (!post) { notFound() }
    return post
}


export default async function postPage({params}) {

  const post = await getPost(params.id)

  return (
      <>
      <PostTitle post={post}/>
      <PostIndex post={post}/>
      <PostContent post={post}/>
      {/* <PostTitle title={title} description={description} />
      <PostIndex contentIndex={contentIndex} author={author} category={category}/>
      <PostContent content={content}/> */}
      </>
  )
}
