'use client'

import { useEffect, useState } from "react";
// Components
import PostContent from "../Components/PostContent";
import PostIndex from '../Components/PostIndex';
import PostTitle from '../Components/PostTitle';


export default function PostPage({params}) {

  const[title, setTitle] = useState('')
  const[contentIndex, setContentIndex] = useState('')
  const[content, setContent] = useState('')
  const[description, setDescription] = useState('')
  const[author, setAuthor] = useState('')
  const[category, setCategory] = useState([])
  

  //Api all from piqus_post table supabase db
  const getPost = async () => {

    const id = params.title

    const url = '/api/blog/get';
    const options = {
      method: 'GET',
      headers: {"Content-Type": "application/json"},
    }

    const response = await fetch(url, options);
    if(response.ok){

      const data = await response.json();
      const filteredArray = data.filter(( el )=>{ return el.id == id })
      const post = filteredArray[0]

      setData(post);
      

    }else{
      console.log('api error: pagePost component')
    }
  }

  const setData = (post) => {

    setTitle( post.title)
    setContentIndex( post.content_index)
    setContent( post.content)
    setDescription( post.description)
    setAuthor( post.author)
    setCategory(post.category)

  }

  useEffect( ()=> {
      getPost()
  },[])


  return (
      <>
      <PostTitle title={title} description={description} />
      <PostIndex contentIndex={contentIndex} author={author} category={category}/>
      <PostContent content={content}/>
      </>
  )
}
