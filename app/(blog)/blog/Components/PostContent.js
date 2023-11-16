

export default function PostContent({content}) {
  return (
    <section className="mb-5 p-3 text-dark fw-light">
      <div className="container">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </section>
  )
}







