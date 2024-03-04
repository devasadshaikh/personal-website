import Hero from "./components/main/Hero";
import Skills from "./Skills/page";
import Projects from "./Projects/page";
import Hamburger from "./components/sub/Hamburger";
import ContactPage from "./Contact/page";



export default function Home() {
  return (
    <>
      <main className=" h-full w-full">
        <div className="">
         
          <Hero />
          <Skills />
       
          <Projects />
          <ContactPage />

          <h1>hello</h1>
        </div>
      </main>
    </>
  );
}
