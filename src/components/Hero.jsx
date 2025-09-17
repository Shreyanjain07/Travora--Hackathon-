import Slideshow from "./Slideshow";

function Hero() {
  return (
    <div>

      <Slideshow />,
      <section className="text-center py-20 bg-gradient-to-r from-green-500 to-orange-500">
        
        <h2 className="text-5xl font-extrabold">Smart Safety for Tourists</h2>
        <p className="mt-4 text-xl max-w-2xl mx-auto">
          Travora ensures safe and secure journeys with AI monitoring, digital IDs,
          and geo-fencing technology.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-green-700 font-bold rounded-xl hover:bg-gray-100 transition">
          Get Started
        </button>
      </section>
    </div>
  );
}

export default Hero;
