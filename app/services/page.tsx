import Image from "next/image";
import Link from "next/link";
import { readData } from "../../lib/db";
import EditableText from "../../Components/EditableText";

export default function Services() {
  const contentArray = readData<any>("content");
  const content = contentArray[0] || {};

  const servicesData = {
    title: content.services?.title || "Our Services",
    description:
      content.services?.description ||
      "Delivering integrated engineering, infrastructure, and industrial solutions across diverse sectors with efficiency and innovation.",
    services:
      content.services?.services || [
        {
          id: "telecom",
          title: "Telecom",
          description: "High precision telecom engineering and network infrastructure solutions.",
          image: "/images/telecom.jpg",
        },
        {
          id: "power",
          title: "Power",
          description: "Reliable power generation, renewable energy, and industrial energy systems.",
          image: "/images/power.jpg",
        },
        {
          id: "oilgas",
          title: "Oil & Gas",
          description: "Engineering, procurement, and industrial support for oil & gas operations.",
          image: "/images/oilgas.jpg",
        },
        {
          id: "marine",
          title: "Marine Services",
          description: "Comprehensive marine, offshore, and port infrastructure solutions.",
          image: "/images/marine.jpg",
        },
        {
          id: "construction",
          title: "Construction",
          description: "Modern civil construction, road works, and large-scale infrastructure.",
          image: "/images/construction.jpg",
        },
        {
          id: "food",
          title: "Food & Beverages",
          description: "Efficient supply chain and industrial processing support services.",
          image: "/images/food.jpg",
        },
        {
          id: "manpower",
          title: "Manpower",
          description: "Skilled workforce deployment and technical staffing solutions.",
          image: "/images/manpower.jpg",
        },
        {
          id: "airlines",
          title: "Airlines",
          description: "Specialized operational and infrastructure support for aviation sectors.",
          image: "/images/airlines.jpg",
        },
      ],
  };

  return (
    <section className="pt-32 pb-20 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <EditableText
          path="services.title"
          initialValue={servicesData.title}
          tag="h1"
          className="text-4xl font-bold text-gray-800 mb-6"
        />

        <EditableText
          path="services.description"
          initialValue={servicesData.description}
          tag="p"
          className="text-xl text-gray-700 max-w-3xl mx-auto mb-14"
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {servicesData.services.map((service: any, index: number) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className="group bg-white rounded-2xl shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
            >
              <div className="h-44 w-full overflow-hidden">
                <Image
                  src={service.image || `/images/${service.id}.jpg`}
                  alt={service.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transition duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <EditableText
                  path={`services.services.${index}.title`}
                  initialValue={service.title}
                  tag="h3"
                  className="text-xl font-semibold text-gray-800 mb-2"
                />
                <EditableText
                  path={`services.services.${index}.description`}
                  initialValue={service.description}
                  tag="p"
                  className="text-gray-600 text-sm leading-relaxed"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
