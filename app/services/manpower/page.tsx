import Image from "next/image";

export default function Manpower() {
  return (
    <div className="py-16">

      <div className="relative w-full h-72 md:h-96 mb-12">
        <Image
          src="/images/manpower.jpg"
          alt="Manpower"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Manpower
          </h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 space-y-8 text-gray-800">

      <p>
        We believe in building long-term partnerships with our clients.
        Before beginning any recruitment process, we carefully understand
        the organization’s work culture, environment, and requirements so
        that we can identify candidates who are both technically qualified
        and culturally compatible with the company.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Our Recruitment Process</h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Industry and organizational structure analysis</li>
        <li>Targeted candidate search through industry networks</li>
        <li>Advertising and database sourcing</li>
        <li>Candidate interviews conducted by our consultants</li>
        <li>Reference verification with previous employers</li>
        <li>Shortlisting of qualified candidates for final interviews</li>
      </ul>

      <p>
        We also act as a mediator between candidates and organizations to
        ensure smooth communication, proper expectations, and a successful
        transition for selected candidates.
      </p>

    </div>

    </div>
  );
}