import ImageCarousel from "@/app/Components/ImageCarousel";

export default function Hero() {
  return (
    <section className="relative py-0 h-120 text-white overflow-hidden">

      {/* Background Carousel */}
      <div className="absolute inset-0 -z-10">
        <ImageCarousel />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      {/* Content */}
      <div className="relative z-10 mt-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl mb-6">
          <b className="text-[#c34466]">Germane</b> <b className="text-green-400">Synergy</b>
        </h1>

        <p className="text-lg md:text-xl mb-8 max-w-3xl">
          We advocate for clean and green environment for our future generations.
          We seek your extreme willingness to join hands with us to make better
          environment and better process for our future generations.
        </p>

        <button className="bg-blue-100 text-blue-700 px-6 py-3 rounded-lg font-semibold transition duration-300 hover:bg-blue-700 hover:text-white">
          Get Started
        </button>
      </div>

    </section>
  );
}
