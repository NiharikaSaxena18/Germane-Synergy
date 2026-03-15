import Image from "next/image";

export default function Marine() {
  return (
    <div className="py-16">

      <div className="relative w-full h-72 md:h-96 mb-12">
        <Image
          src="/images/marine.jpg"
          alt="Marine Services"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Marine Services
          </h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 space-y-8 text-gray-800">

      <p>
        We provide reliable marine support services for offshore and coastal
        operations. Our experience in challenging marine environments enables
        us to deliver safe, efficient, and cost-effective solutions for
        logistics, transportation, and offshore infrastructure support.
      </p>

      <p>
        Our marine operations are designed to support oil & gas, construction,
        and offshore development projects. With specialized vessels,
        experienced crews, and strong operational planning, we ensure smooth
        execution of complex marine activities.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Marine Capabilities</h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Crew boat logistics for offshore sites</li>
        <li>Tug boat and barge transportation</li>
        <li>Dredging and marine construction support</li>
        <li>Jetty and mooring facility support</li>
        <li>Rescue and emergency marine response</li>
        <li>Offshore equipment and material transport</li>
      </ul>

      <p>
        Our goal is to provide dependable marine services that ensure safety,
        efficiency, and operational continuity for our clients’ offshore and
        coastal projects.
      </p>

    </div>

    </div>
  );
}