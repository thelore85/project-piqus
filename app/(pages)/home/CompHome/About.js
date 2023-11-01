import Image from "next/image";


export default function About() {
  return (
    <section className="p-5 text-center d-flex justify-content-center align-items-center" style={{ backgroundImage : 'url(/img/home/net-bg-1.jpg)', minHeight : '70%'}}>
      <div className="container ">
        
        <div className="">
          <h1 className="text-white fw-bolder h1 p-5">Connecting people from more than 10 years</h1>
            <div className="row p-4 d-flex align-items-center">
              
              <div className="col-4">
                <div className=" m-auto  rounded-circle" style={{ backgroundImage : "url(/img/home/about_img.jpg)", backgroundSize:'cover', backgroundPosition: 'top',  width: '100%', maxWidth: '300px', minHeight:'300px',  }}></div>
              </div>

              <div className="col-8 text-white text-start">
                <h4>Passion for digital</h4>
                <p className="fw-lighter small">With a decade of experience in online communication, I bring an international perspective as a seasoned freelancer and collaborator with multinational companies in finance, healthcare, entertainment, and fashion. </p>
                <p className="fw-lighter small">I've mastered modern online marketing strategies, implemented complex marketing technology, and kept websites and platforms up to date. </p>
                <p className="fw-lighter small">In 2023, I completed an intensive web development course to stay at the forefront of industry techniques. Explore my portfolio for limitless digital possibilities.</p>
              </div>

            </div>

        </div>

      </div>

    </section>
  )
}
