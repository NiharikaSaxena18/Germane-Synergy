import Image from "next/image";
export default function Telecom() {
  return (
    <div className="py-16">
      <div className="relative w-full h-72 md:h-96 mb-12">
        <Image
          src="/images/telecom.jpg"
          alt="Telecom"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Telecom
          </h1>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-6 space-y-10 text-gray-800">

        <section>

        <p className="mb-4">
          We have the experience and equipment to handle any type of underground
          construction project you may have, large or small, in rural or
          metropolitan environments.
        </p>
        <p className="mb-4">
          We have completed projects ranging from as little as a few hundred
          feet to projects spanning hundreds of miles. Germane Synergy has
          handled many different soil conditions, from underwater environments
          to solid rock. We have also completed numerous joint trench projects
          with other utilities.
        </p>
        <p>
          Whether you are in need of a single trench, trench-less technology, or
          cable pulling, you can trust your underground construction project to
          Germane Synergy.
        </p>

        </section>

      <section>
        <h1 className="text-3xl font-bold mb-4">Construction</h1>
        <p className="mb-4">
          We have developed a strong reputation for building sites of the
          highest quality, reflected in our customers’ own audit figures. By
          employing our own site build teams we guarantee exceptional quality
          and reliable delivery timescales.
        </p>
        <p>
          Our multi-skilled teams eliminate the need for expensive multiple
          visits by specialists to perform specific tasks, allowing Germane
          Synergy to pass on cost savings directly to the client.
        </p>
      </section>

      <section>
        <h1 className="text-3xl font-bold mb-4">Installation & Commissioning</h1>
        <p className="mb-4">
          We undertake installation and commissioning work and are involved in
          the rollout of modern telecommunications services. We have worked with
          major operators and our experienced teams of engineers are trained to
          install equipment from a wide range of vendors.
        </p>

        <h2 className="text-xl font-semibold mb-2">Our services include:</h2>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Equipment de-commissioning / relocation</li>
          <li>Swap out / upgrades</li>
          <li>Transmission enablement surveys / power installation</li>
          <li>Site audits</li>
          <li>Materials and upgrade management</li>
          <li>Full script creation and building of IP solutions</li>
          <li>Integration with existing equipment</li>
          <li>Post-commissioning call / drive tests</li>
        </ul>

        <p className="mb-4">
          Our engineers undertake all aspects of BTS, Node B, EBTS, MTS and LTE
          equipment installation and commissioning, providing all necessary
          testing certification and handover documentation. We are regarded as
          specialists in this field due to our strong troubleshooting abilities
          and the large number of sites delivered to date.
        </p>

        <p>
          We assign a dedicated team member to each client’s region to work
          closely with customers and provide rapid response services to resolve
          network faults or make alterations within hours. All engineers also
          receive health and safety awareness training.
        </p>
      </section>

      <section>
        <h1 className="text-3xl font-bold mb-4">Project Management</h1>
        <p className="mb-4">
          We provide high-quality project management with experienced personnel
          to ensure timely project delivery. Our team works closely with
          customers to understand their processes and manage them within the
          project framework.
        </p>

        <p className="mb-4">
          For complex aspects of a project, detailed project plans, risk
          identification and mitigation strategies are developed to ensure
          smooth execution.
        </p>

        <p>
          Germane Synergy has an enviable track record of resolving issues
          rapidly and effectively thanks to the experience and expertise of our
          team. Our specialists are empowered to take whatever action is
          required to resolve problems, and when additional support is needed,
          they have the backing of a highly skilled and experienced team.
        </p>
      </section>

    </div>

    </div>
  );
}