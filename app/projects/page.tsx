export default function Projects() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16 mt-5">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Our Projects
          </h1>
          <i className="text-xl text-gray-700 max-w-3xl leading-relaxed">
            Delivering large-scale infrastructure, energy, and telecom solutions 
            with precision, sustainability, and innovation.
          </i>
        </div>

        {/* Major Breakthrough */}
        <div className="mb-16 bg-white shadow-md rounded-2xl p-10">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Free Zone Development – Nigeria
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our latest and major breakthrough is our partnership in a Free Zone 
            Development project in Nigeria. As one of the key partners, we are involved 
            in the construction of road infrastructure, deep sea port facilities, land 
            and warehouse development, power plants, tank farms, and jetty systems.
          </p>
        </div>

        {/* Solar Project */}
        <div className="mb-16 bg-white shadow-md rounded-2xl p-10">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Large-Scale Solar Telecom Solution
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            We have successfully constructed one of the largest solar power solutions 
            for a telecom facility in Nigeria. The system achieved its design objective 
            by reducing diesel generator runtime by 90%, significantly improving 
            efficiency and sustainability. This success strengthens our confidence 
            in delivering optimized infrastructure power solutions.
          </p>
        </div>

        {/* Telecom Infrastructure */}
        <div className="mb-16 bg-white shadow-md rounded-2xl p-10">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            National & Metro Fiber Network
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            One of our directors played a key role in the construction of the first-ever 
            national and metro ring fiber networks for major telecom operators in Nigeria. 
            With over 18 years of project and business management experience, our leadership 
            ensures excellence in construction services and integrated solutions delivery.
          </p>
        </div>

        {/* Power Expertise Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          
          <div className="bg-white shadow-md rounded-2xl p-8 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Green Energy Solutions
            </h3>
            <p className="text-gray-600">
              We deliver sustainable green power solutions ranging from 5KW 
              to thousands of megawatts, tailored to diverse industry needs.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-8 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Installed Capacity
            </h3>
            <p className="text-gray-600">
              We have successfully installed a total of 11MW of power solutions 
              across Nigeria, supporting telecom and industrial facilities.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-8 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Ongoing Developments
            </h3>
            <p className="text-gray-600">
              Currently, we are designing nearly 4MW of power plants for various 
              industries, reinforcing our position as a trusted power and telecom 
              energy solutions provider.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}