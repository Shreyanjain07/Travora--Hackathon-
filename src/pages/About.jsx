import Navbar from '../components/Navbar'
import About from '../components/About'
import Footer from '../components/Footer'
import '../App.css'

function Home() {
  return (
     <div className='min-h-screen bg-gray-50 text-gray-900'>

      <Navbar />,
      <About />,
      <Footer />
    </div>
  );
}

export default Home;