
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


export default function Title() {
  return (
    <section className="mb-5 text-white d-flex justify-content-center align-items-center" style={{  background:'#020d1e', borderBottom:'solid 1rem white', padding:'6rem 1rem' }}>
      <div className="container px-4">

        <div className="mb-5">
          <h1 className="mb-4 fw-bolder">The Art of Project Organization</h1>
          
          <p className="h5 fw-light" style={{lineHeight:'2rem', letterSpacing:'1px'}}>
          If you've pondered on the distinctions in the tech galaxy, this article is your cosmic guide!
          Let's dive into the tech vibes and unravel the secrets that make them the backbone of innovation! 🚀✨
          </p>
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
