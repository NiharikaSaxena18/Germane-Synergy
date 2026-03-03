export default function About() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            About Us
          </h1>
          <i className="text-xl text-gray-700 max-w-3xl leading-relaxed">
            Germane Synergy combines world-class engineering excellence with global innovation 
            to deliver sustainable and efficient solutions worldwide.
          </i>
        </div>

        {/* Company Overview */}
        <div className="space-y-8 text-gray-600 leading-relaxed text-lg">
          <p>
            We are one of the few Nigerian companies with integrated expertise across 
            Construction, Oil & Gas, Energy, and Telecom. Our Oil & Gas and Construction 
            capabilities are delivered in collaboration with our civil technical partners 
            <span className="font-semibold text-gray-800"> HIDROAD Construction</span> (founded in 1976), 
            specialists in land development, road construction, buildings, prefabricated structures, 
            epoxy flooring, steel structures, and tank farms.
          </p>

          <p>
            During the economic recession period, industry experts in Power, Oil & Gas, Civil, 
            and Telecom sectors came together to form Germane Synergy Limited (GSL) — 
            creating a unified platform to execute diverse projects across Nigeria under one umbrella, 
            optimizing cost and operational efficiency.
          </p>

          <p>
            Established in 2011 in Nigeria by a team of professional engineers and technical 
            business leaders, Germane Synergy focuses on delivering environmentally friendly 
            infrastructure and power solutions across industries.
          </p>

          <p>
            Though founded in the new millennium, our consultants and promoters bring over 
            eighteen years of experience in the Construction, Telecom, and Energy sectors. 
            We maintain strong connections across executive, managerial, and non-executive levels, 
            enabling us to serve a wide range of professional and technical positions.
          </p>

          <p>
            Whether you require contractual or permanent technical or non-technical services, 
            procurement, supplies, or outsourcing, we provide a comprehensive one-stop solution — 
            saving valuable time and cost while ensuring quality delivery.
          </p>
        </div>

        {/* Vision / Strength Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          
          <div className="bg-white shadow-md rounded-2xl p-8 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Integrated Expertise
            </h3>
            <p className="text-gray-600">
              One of the youngest fully integrated Construction, Energy, Oil & Gas, 
              and Telecom companies operating across West Africa.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-8 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Responsible Growth
            </h3>
            <p className="text-gray-600">
              Our success is driven by responsible operations, engineering excellence, 
              innovative technologies, and the pursuit of sustainable profitability.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-8 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Sustainable Solutions
            </h3>
            <p className="text-gray-600">
              We develop high-efficiency, environmentally friendly solutions and invest 
              in research and development at every stage of our projects.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}