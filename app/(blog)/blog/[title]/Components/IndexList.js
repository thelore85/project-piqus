
import Link from "next/link";

export default function IndexList() {
  return (

    <section className="p-3">
      <div className="container ">

          <div className="card p-4">
            <h2 className="h4 bolder text-primary ">Table of Contents</h2>
            <ol>
              <li><Link className=" text-black fw-medium" href="#understanding-project-structure">Understanding Project Structure</Link></li>
              <li><Link className=" text-black fw-medium" href="#the-benefits">The Benefits</Link></li>
              <li><Link className=" text-black fw-medium" href="#best-practices">Best Practices</Link></li>
              <li><Link className=" text-black fw-medium" href="#further-reading">Further Reading</Link></li>
              <li><Link className=" text-black fw-medium" href="#getting-started">Getting Started</Link></li>
            </ol>
            <p className="small text-secondary fst-italic opacity-50" style={{fontSize:'0.7rem'}}>Written by Lorenzo Garofalo</p>
        </div>

        <div className="p-3">
          <span className="badge text-bg-success mb-4 me-2" >Javascript</span> 
          <span className="badge text-bg-secondary mb-2 me-2" >developing</span>
        </div>
      
      </div>
    </section>

  )
}
