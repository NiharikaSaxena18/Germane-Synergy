import Image from "next/image";

export default function OilGas() {
  return (
    <div className="py-16">

      <div className="relative w-full h-72 md:h-96 mb-12">
        <Image
          src="/images/oilgas.jpg"
          alt="Oil & Gas"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Oil & Gas
          </h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 space-y-10 text-gray-800">

        <section>

        <p className="mb-4">
          We are an experienced alternative contractor serving the highly
          competitive Nigerian Marine and Oil & Gas sector. Our extensive
          experience in harsh environments, combined with specialty equipment
          and strong project performance, allows us to execute complex projects
          efficiently, safely, and within budget.
        </p>

        <p className="mb-4">
          Our operations rely on professional project management, strong
          leadership, effective cost control, and clear communication. We are
          experienced in working under tight timelines while coordinating with
          multiple contractors to successfully deliver projects.
        </p>

        </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Key Services</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Tank Farm Fabrication and Storage Terminal Development</li>
          <li>Single Point Mooring (SPM) Installation</li>
          <li>Concrete Weight Coating for Pipeline Protection</li>
          <li>Dredging Equipment Supply and Vessel Solutions</li>
          <li>Tank Chartering and Vessel Supply</li>
          <li>Crew Boat Logistics for Offshore Operations</li>
          <li>Rigging and Contract Drilling Services</li>
          <li>Tug Boat and Barge Supply</li>
          <li>Emergency Rescue Boat Deployment</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Engineering & Construction</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Tank Farm Development</li>
          <li>Mooring Facility Development</li>
          <li>Anti-Corrosion Processes for Pipelines</li>
          <li>Jetty Development</li>
          <li>Waterway and Marine Services</li>
          <li>Dredging Services</li>
          <li>Barge Operations</li>
          <li>Undersea Services (Submersible Barges)</li>
        </ul>
      </section>

    </div>

    </div>
  );
}