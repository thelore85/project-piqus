'use client'

import Link from "next/link";

export default function PostCard({post}) {

  return (
    <div className="col-md-6 col-lg-4" >
    <div className="card rounded my-4 opacity-75 bg-white" >

      <div className="p-3">

        {post.category.map( (el, i) => {
          return <span key={i} className="badge text-bg-success mb-4 me-2" >{el}</span> 
        })}
        
      </div>

      <div className=" fw-light text-dark px-3 ">
        <p>{post.description}</p>
        <p className="small opacity-50" style={{fontSize:'0.7rem'}}>Written by {post.author}</p>
      </div>
      
      <div className=" fw-bolder rounded-top px-3" >
        <h2 className=" text-black h2 fw-bolder py-3 border-bottom border-dark">{post.title}</h2>
        <Link href={`/blog/${post.id}`} >
          <button className="btn btn-light btn-sm border-primary text-primary my-3">Read Article</button>
        </Link>
      </div>
    </div>
    </div>
  )
}
