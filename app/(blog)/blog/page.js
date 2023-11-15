
import About from "@/app/(pages)/home/CompHome/About";
import CallToAction from "@/app/(pages)/home/CompHome/CallToAction";
import Title from "./Components/Title";
import PostList from "./Components/PostList";



export default function blogPage() {

  return (
      <>
      <Title />
      <PostList />
      <CallToAction />
      <About />
      </>
  )
}
