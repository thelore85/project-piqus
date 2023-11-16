

export default function PostIndex({contentIndex, author, category}) {
  return (

    <section className="p-3">
      <div className="container ">

        <div className="card p-4">
          <h2 className="h4 bolder text-primary ">Table of Contents</h2>
            <ol dangerouslySetInnerHTML={{ __html: contentIndex }} />
          <p className="small text-secondary fst-italic opacity-50" style={{fontSize:'0.7rem'}}>Written by {author}</p>
        </div>

        <div className="p-3">

          {category.map( (el , i )=> { 
            return <span key={i} className="badge text-bg-success mb-4 me-2" >{ el }</span> 
          } )} 

          {/* <span className="badge text-bg-secondary mb-2 me-2" >developing</span> */}
        </div>
      
      </div>
    </section>

  )
}


