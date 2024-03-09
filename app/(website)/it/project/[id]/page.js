
import About from "@/app/(website)/it/Components/Sections/About"
import ProjectLayout from "../ProjectLayout"
import CallToAction from "@/app/(website)/it/Components/Sections/CallToAction"
import Partners from "../../Components/Sections/Partners"
import Portfolio from "../../Components/portfolio/Portfolio"



export default function PortfolioProject({ params }) {


  //-- render project attribute in the page


  return (

    <>
      <ProjectLayout params={params}/>
      <CallToAction />
      <Portfolio />
      <Partners />
    </>

  
  )
}