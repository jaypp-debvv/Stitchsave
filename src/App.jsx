import Navbar from "./components/Navbar";
import CardSlide from "./components/CardSlide";


function App() {
  return (
    <div className="">
      <Navbar />

      {/* HERO SECTION */}
      {/* flex-col = stack on small screens
          md:flex-row = side-by-side on medium and big screens */}
      <div className="flex flex-col md:flex-row pt-20 md:pt-28 px-6">

        {/* LEFT COLUMN */}
        <div className="flex-1 pt-10">

          <p className="text-pink-400 border-2 rounded-full inline-block px-3 py-1 bg-pink-200">
            Finance Solutions for You
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mt-4">
            Save Smart. Grow Bold
          </h1>

          <p className="mt-3 text-gray-600 max-w-md">
            Suresave helps artisans, fashion designers and small business owners
            save effortlessly, track profit and share success.
          </p>

          <div className="flex gap-3 pt-5">
            <button className="px-5 py-2 bg-indigo-800 text-white rounded-lg hover:bg-indigo-700">
              Get Started
            </button>
            <button className="px-9 py-2 text-blue-800 rounded-xl border-2 border-indigo-600">
              Login
            </button>
          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="flex-1 flex justify-center items-center pt-10 md:pt-0">
        
        <CardSlide />
          
        </div>

      </div>
    </div>
  );
}

export default App;
