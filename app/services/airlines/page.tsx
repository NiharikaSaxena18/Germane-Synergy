import Image from "next/image";

export default function Airlines() {
  return (
    <div className="py-16">

      <div className="relative w-full h-72 md:h-96 mb-12">
        <Image
          src="/images/airlines.jpg"
          alt="Airlines"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Airlines
          </h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-gray-800">

        <p className="text-lg font-semibold text-gray-600">
          COMING SHORTLY – National and International Airline Services
        </p>

      </div>

    </div>
  );
}