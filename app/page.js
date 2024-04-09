import Aboutsection from "@/components/aboutsection";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projectsection from "@/components/projectsection";

export default function Home() {
  return (
  <main className="flex min-h-screen flex-col bg-[#121212] container  ">
   <Navbar/>
   {/* container  */}
   <div className="container w-full mt-24 mx-auto px-12 py-4">
    <Hero />
    <Aboutsection/>
    <Projectsection/>
    {/* <Projectscards/> */}
    </div>
  </main>
  );
}
