import Link from "next/link";
export default function Services() {
  return (
    <section className="py-15 bg-gray-300">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Services</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <Link href="/services/telecom" className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 transform hover:-translate-y-3 hover:shadow-xl">
            <div className="h-40 w-full">
              <img src="images/telecom.jpg" alt="Telecom" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Telecom</h3>
              <p>High precision telecom engineering solutions.</p>
            </div>
          </Link>

          <Link href="/services/power" className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 transform hover:-translate-y-3 hover:shadow-xl">
            <div className="h-40 w-full">
              <img src="images/power.jpg" alt="Power" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Power</h3>
              <p>Reliable power and energy infrastructure services.</p>
            </div>
          </Link>

          <Link href="/services/oilgas" className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 transform hover:-translate-y-3 hover:shadow-xl">
            <div className="h-40 w-full">
              <img src="images/oilgas.jpg" alt="Oil & Gas" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Oil & Gas</h3>
              <p>Industrial support for oil and gas operations.</p>
            </div>
          </Link>

          <Link href="/services/marine" className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 transform hover:-translate-y-3 hover:shadow-xl">
            <div className="h-40 w-full">
              <img src="images/marine.jpg" alt="Marine Services" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Marine Services</h3>
              <p>Comprehensive marine and offshore solutions.</p>
            </div>
          </Link>

          <Link href="/services/construction" className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 transform hover:-translate-y-3 hover:shadow-xl">
            <div className="h-40 w-full">
              <img src="images/construction.jpg" alt="Construction" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Construction</h3>
              <p>Modern construction and infrastructure development.</p>
            </div>
          </Link>

          <Link href="/services/food" className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 transform hover:-translate-y-3 hover:shadow-xl">
            <div className="h-40 w-full">
              <img src="images/food.jpg" alt="Food & Beverages" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Food & Beverages</h3>
              <p>Efficient supply chain and processing services.</p>
            </div>
          </Link>

          <Link href="/services/manpower" className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 transform hover:-translate-y-3 hover:shadow-xl">
            <div className="h-40 w-full">
              <img src="images/manpower.jpg" alt="Manpower" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Manpower</h3>
              <p>Skilled workforce solutions across industries.</p>
            </div>
          </Link>

          <Link href="/services/airlines" className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 transform hover:-translate-y-3 hover:shadow-xl">
            <div className="h-40 w-full">
              <img src="images/airlines.jpg" alt="Airlines" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Airlines</h3>
              <p>Support services for aviation and airline sectors.</p>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}