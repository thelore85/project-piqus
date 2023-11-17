
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


export default function PostTitle({post}) {
  return (
    <section className="mb-5 text-white d-flex justify-content-center align-items-center" style={{  background:'#020d1e', borderBottom:'solid 1rem white', padding:'6rem 1rem' }}>
      <div className="container px-4">

        <div className="mb-5">
          <h1 className="mb-4 fw-bolder">{post.title}</h1>
          
          <p className="h5 fw-light" style={{lineHeight:'2rem', letterSpacing:'1px'}}>{post.description}</p>
        </div>

        <div className="h4">
          <FontAwesomeIcon icon={faWhatsapp} className="me-3" />
          <FontAwesomeIcon icon={faLinkedin} className="me-3" />
          <FontAwesomeIcon icon={faFacebook} className="" />
        </div>

      </div>
    </section>
  )
}
