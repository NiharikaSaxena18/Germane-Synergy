export default function Careers() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto">
        
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Join Us
        </h1>

        {/* Intro Text */}
        <div className="text-gray-600 leading-relaxed space-y-5 text-lg">
          <p>
            Any career is a journey. That journey at <span className="font-semibold text-gray-800">Germane Synergy</span> is both challenging and rewarding, giving you the opportunity to help make a visible difference in the world.
          </p>

          <p>
            Germane Synergy is independent and attracts a diverse mix of independently minded people. 
            You will work in a rich culture that is naturally curious and consistently stimulating.
          </p>

          <p>
            The projects and places your journey takes you are in your hands. 
            We provide the right clients, questions, and tools to help you get there.
          </p>
        </div>

        {/* Career Opportunities Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-10">
          
          <div className="bg-white shadow-md rounded-2xl p-8 transition duration-300 transform hover:-translate-y-3 hover:shadow-xl">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Craft Workers
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Whether you are union or merit-shop (non-union), Germane Synergy 
              has opportunities available for you at our project locations.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-8 transition duration-300 transform hover:-translate-y-3 hover:shadow-xl">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Career Fields
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We offer a world of possibilities — from engineering to environmental, 
              safety & health, and from procurement to project controls.
            </p>
          </div>

        </div>

        {/* Application Section */}
        <div className="mt-16 bg-blue-500 text-white rounded-2xl p-10 transition duration-300 transform hover:scale-105 hover:shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">
            Apply With Us
          </h2>

          <p className="leading-relaxed mb-6">
            Please send us your curriculum vitae, a covering letter, and an informal short essay 
            explaining why you believe you would be a good fit at Germane Synergy.
          </p>

          <a
            href="mailto:career@germanesynergy.com"
            className="inline-block bg-white text-blue-500 px-6 py-3 rounded-lg font-medium transition duration-300 hover:bg-blue-700 hover:text-white">
            career@germanesynergy.com
          </a>

          <p className="mt-6 text-sm opacity-90">
            We will be sure to contact you if there is a suitable opening.
          </p>
        </div>

      </div>
    </section>
  );
}