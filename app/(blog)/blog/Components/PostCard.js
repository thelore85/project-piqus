
// DATA BASE STRUCTURE:
// category
// title
// description
// author
// id
// content (html)

import Link from "next/link";

export default function PostCard() {
  return (
    <div className="col-md-6 col-lg-4" >
    <div className="card rounded my-4 opacity-75 bg-white" >

      <div className="p-3">
        <span className="badge text-bg-success mb-4 me-2" >Javascript</span> 
        <span className="badge text-bg-secondary mb-2 me-2" >developing</span>
      </div>

      <div className=" fw-light text-dark px-3 ">
        <p>Ever wondered what separates Web Developers from Software Engineers? Read this article!</p>
        <p className="small opacity-50" style={{fontSize:'0.7rem'}}>Written by Lorenzo Garofalo</p>
      </div>
      
      <div className=" fw-bolder rounded-top px-3" >
        <h2 className=" text-black h2 fw-bolder py-3 border-bottom border-dark">Web Developer or Software Engineer?</h2>
        <Link href="/blog/ciao" >
          <button className="btn btn-light btn-sm border-primary text-primary my-3">Read Article</button>
        </Link>
      </div>
    </div>
    </div>
  )
}
