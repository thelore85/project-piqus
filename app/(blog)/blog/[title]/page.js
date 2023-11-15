
import Title from './Components/Title';

import About from "@/app/(pages)/home/CompHome/About";
import CallToAction from "@/app/(pages)/home/CompHome/CallToAction";
import Content from "./Components/Content";
import IndexList from './Components/IndexList';


export default function postPage({params}) {

  return (
      <>
      <Title />
      <IndexList />
      <Content />
      <CallToAction />
      <About />
      </>
  )
}
