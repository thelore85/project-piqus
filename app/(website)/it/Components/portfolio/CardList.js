import React from 'react'


export default function CardList({ filteredList}) {
  return (
    <div className="card-list text-center container">

      { filteredList ? filteredList.map( project =>
      <div key={project.id} className='p-2 d-inline-block ' style={{width:"100%", maxWidth:"350px"}}>
        <div className="card-wrapper rounded text-start  px-2 py-4 bg-light"  >

          <div className='card-element'>
            <div className="card-color w-100 mb-1" style={{backgroundColor:`rgb(${project.color[0]}, ${project.color[1]}, ${project.color[2]})`, height:"5px"}}></div>
            <div className='card-content text-white small fw-light p-2 mb-3 rounded-bottom' style={{background:"#131529"}}>
              <h4 className='fw-bold py-2 mb-3'>{project.title}</h4>
              <p className='d-none d-md-block'>{project.strapLine}</p>
            </div>
            <div className='card-tag border-bottom mb-3 small '>
              <ul className="p-0">
                {project.tech.map( (tool, index) => 
                  <li key={index} className='d-inline-block me-2' style={{fontSize:"12px"}}>#{tool}</li>
                )}
              </ul>
            </div>
            <a className="btn btn-light text-primary border-primary btn-sm me-3" href={`/it/project/${project.id}`}>View More</a>
          </div>

        </div>
      </div>
      ): null}

    </div>
  )
}
