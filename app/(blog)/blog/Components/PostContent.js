

export default function PostContent({post}) {
  return (
    <section className="mb-5 p-3 text-dark fw-light">
      <div className="container">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </section>
  )
}







