import Image from "next/image";

export default function Construction() {
  return (
    <div className="py-16">

      <div className="relative w-full h-72 md:h-96 mb-12">
        <Image
          src="/images/construction.jpg"
          alt="Construction"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Construction
          </h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 space-y-8 text-gray-800">

      <p>
        We are a prominent provider of land development, infrastructure
        construction, road construction, prefab construction, and tank farm
        development. Our civil engineering team has successfully completed
        numerous projects and delivers reliable construction services using
        high-grade materials and strong groundwork.
      </p>

      <h2 className="text-2xl font-semibold">Construction Services</h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>State and National Highways</li>
        <li>RCC and Concrete Roads</li>
        <li>Bitumen Roads</li>
        <li>Earth Roads</li>
        <li>Heavy Vehicle Parks</li>
        <li>Prefab Construction</li>
        <li>Technical Flooring (Epoxy)</li>
      </ul>

      <h2 className="text-2xl font-semibold">Land Development</h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Bush clearing</li>
        <li>Leveling and compacting</li>
        <li>Dredging and excavation</li>
      </ul>

      <p>
        Our projects are managed by highly qualified technical professionals
        who continuously adapt modern technologies to meet specific client
        requirements.
      </p>

    </div>

    </div>
  );
}