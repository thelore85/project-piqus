import Link from "next/link";


export default function Title() {
  return (
    <section className="py-5 px-2 text-white d-flex justify-content-center align-items-center" style={{  background: '#020d1e' }}>
      <div className="container justify-content-between align-items-center d-md-flex">

        <div className="mb-4">
          <h1 className="mb-4 fw-bolder">Piqus Blog. </h1>
          <p className="h5 fw-lighter">Spreading digital culture to the world</p>
        </div>

        <div>
        <Link href="/blog/createpost">
          <button className="btn border-primary text-primary">Create Content</button>
        </Link>
        </div>

      </div>
    </section>
  )
}
