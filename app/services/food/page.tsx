import Image from "next/image";

export default function Food() {
  return (
    <div className="py-16">

      <div className="relative w-full h-72 md:h-96 mb-12">
        <Image
          src="/images/food.jpg"
          alt="Food & Beverages"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Food & Beverages
          </h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 space-y-8 text-gray-800">

      <p>
        Get-Alive pure drinking water offers a refreshing and healthy
        hydration option designed to improve well-being and daily energy.
        Proper hydration is essential for maintaining health, reducing
        fatigue, and supporting overall wellness.
      </p>

      <p>
        Our product provides a clean and refreshing drinking experience,
        ensuring quality, safety, and taste for everyday consumption.
      </p>

    </div>

    </div>
  );
}