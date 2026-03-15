import Image from "next/image";

export default function Power() {
  return (
    <div className="py-16">

      <div className="relative w-full h-72 md:h-96 mb-12">
        <Image
          src="/images/power.jpg"
          alt="Power"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Power
          </h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 space-y-10 text-gray-800">

        <section>

        <p className="mb-4">
          We recognize that the world needs all the energy we can develop in
          every potential form. That is why our employees work every day to
          discover newer and cleaner ways to power the world.
        </p>

        <p className="mb-4">
          Germane Synergy Limited is a specialized Independent Power Provider
          (IPP) based in Lagos, Nigeria. Our clients include large single-billing
          customers such as hotels, hospitals, shopping malls, airports,
          large-scale industries, and residential estates.
        </p>

        <p className="mb-4">
          Our approach to green power solutions focuses on creating, modifying,
          enhancing, and protecting the environment through innovative and
          sustainable energy systems. We combine creative engineering solutions
          with truthful and transparent information to meet the needs of our
          clients.
        </p>

        <p className="mb-4">
          By balancing local knowledge, innovative engineering approaches, and
          international partnerships, we are able to effectively deliver reliable
          power solutions. Our commitment to ethical standards and creative
          communication ensures that we meet the energy demands of our clients
          efficiently and responsibly.
        </p>

        <p className="mb-4">
          The company has a strong presence in Nigeria and works through
          representatives in India, the United States, and Singapore to serve
          global clients. Our team consists of technically qualified professionals
          equipped with advanced technical capabilities to deliver comprehensive
          power solutions while reducing operational expenditure and carbon
          emissions.
        </p>

        <p>
          We design and supply a wide range of green power solutions to deliver
          clean and reliable energy for telecom, oil & gas, and other industrial
          applications.
        </p>

        </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Energy & Telecom Construction
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Green Power Plants – 2kW to 1000MW</li>
          <li>Green Power Consultancy</li>
          <li>Gas Based Power Plants – 20kW to 1000MW</li>
          <li>Telecom Green Power Solution Installation Services</li>
          <li>Data Center Power Plants</li>
          <li>SMPS, UPS and Battery Charger Implementation</li>
          <li>Solar Solutions with Mega Watt Capacities</li>
          <li>Power Interface Units</li>
          <li>IPMS Supply and Installations</li>
          <li>Fiber Project Design, Supply, Installation and Maintenance</li>
          <li>Telecom Passive Equipment Supply, Installation and Maintenance</li>
          <li>Innovative Technology Solutions (Implementation and Services)</li>
          <li>Reducing Operational Costs</li>
          <li>Significant Reduction in Carbon Emissions</li>
          <li>Power Crisis Management</li>
        </ul>
      </section>

    </div>

    </div>
  );
}