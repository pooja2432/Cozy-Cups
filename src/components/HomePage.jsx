import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-amber-100 to-yellow-50 text-brown-900" id='home'>
      
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Welcome to <span className="text-amber-600">The Cozy Cups</span>
          </h1>
          <p className="text-lg mb-6 text-gray-700">
            Welcome to a world where coffee isn’t just a drink — it’s a feeling. The moment you step in, the aroma wraps around you like a warm hug. Every cup we serve is a spark — brewed with bold flavors, soft moments, and quiet magic. This isn’t just a café; it’s where mornings begin with poetry, afternoons flow like jazz, and evenings slow down just enough to feel alive. Come sip the vibe. Stay for the soul.
          </p>
          
        </div>

        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
            alt="Coffee Cup"
            className="rounded-3xl shadow-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
