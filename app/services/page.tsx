export default function Services() {
  return (
    <section className="pt-32 pb-20 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Our Services
        </h1>

        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-14">
          Delivering integrated engineering, infrastructure, and industrial
          solutions across diverse sectors with efficiency and innovation.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {/* Telecom */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <div className="h-44 w-full overflow-hidden">
              <img src="/images/telecom.jpg" alt="Telecom" className="w-full h-full object-cover transition duration-300 hover:scale-110" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Telecom</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                High precision telecom engineering and network infrastructure solutions.
              </p>
            </div>
          </div>

          {/* Power */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <div className="h-44 w-full overflow-hidden">
              <img src="/images/power.jpg" alt="Power" className="w-full h-full object-cover transition duration-300 hover:scale-110" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Power</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Reliable power generation, renewable energy, and industrial energy systems.
              </p>
            </div>
          </div>

          {/* Oil & Gas */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <div className="h-44 w-full overflow-hidden">
              <img src="/images/oilgas.jpg" alt="Oil & Gas" className="w-full h-full object-cover transition duration-300 hover:scale-110" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Oil & Gas</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Engineering, procurement, and industrial support for oil & gas operations.
              </p>
            </div>
          </div>

          {/* Marine Services */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <div className="h-44 w-full overflow-hidden">
              <img src="/images/marine.jpg" alt="Marine Services" className="w-full h-full object-cover transition duration-300 hover:scale-110" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Marine Services</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Comprehensive marine, offshore, and port infrastructure solutions.
              </p>
            </div>
          </div>

          {/* Construction */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <div className="h-44 w-full overflow-hidden">
              <img src="/images/construction.jpg" alt="Construction" className="w-full h-full object-cover transition duration-300 hover:scale-110" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Construction</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Modern civil construction, road works, and large-scale infrastructure.
              </p>
            </div>
          </div>

          {/* Food & Beverages */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <div className="h-44 w-full overflow-hidden">
              <img src="/images/food.jpg" alt="Food & Beverages" className="w-full h-full object-cover transition duration-300 hover:scale-110" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Food & Beverages</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Efficient supply chain and industrial processing support services.
              </p>
            </div>
          </div>

          {/* Manpower */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <div className="h-44 w-full overflow-hidden">
              <img src="/images/manpower.jpg" alt="Manpower" className="w-full h-full object-cover transition duration-300 hover:scale-110" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Manpower</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Skilled workforce deployment and technical staffing solutions.
              </p>
            </div>
          </div>

          {/* Airlines */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <div className="h-44 w-full overflow-hidden">
              <img src="/images/airlines.jpg" alt="Airlines" className="w-full h-full object-cover transition duration-300 hover:scale-110" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Airlines</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Specialized operational and infrastructure support for aviation sectors.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}