import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'
import Features from '../components/Features'
import Footer from '../components/Footer'
import '../App.css'

function Home() {
  return (
     <div className='min-h-screen bg-gray-50 text-gray-900'>

      <Navbar />,
      <Hero />,
      <Features />,
      <About />,
      <Contact />,
      <Footer />
    </div>
  );
}

export default Home;