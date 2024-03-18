import Luxury from "./components/Luxury";
import Sedans from "./components/Sedans";
import Suvs from "./components/Suvs";

export default function App() {
  return (
   <main className='min-h-svh bg-offwhitebg px-6 py-20 antialiased lg:flex justify-center items-center'>
      <div className='lg:flex max-w-[920px]'>
       <Sedans/>
       <Suvs/>
       <Luxury/>
      </div>
   </main>
  )
}
