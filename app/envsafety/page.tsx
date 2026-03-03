export default function EnvSafety() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Quality Policy
          </h1>
          <i className="text-xl text-gray-700 max-w-3xl leading-relaxed">
            Germane Synergy Limited is committed to delivering goods and services 
            of the highest quality standards, consistently meeting local and 
            international requirements while exceeding client expectations.
          </i>
        </div>

        {/* Main Policy Content */}
        <div className="space-y-8 text-gray-600 leading-relaxed text-lg">

          <p>
            Germane Synergy Limited ensures that skilled and qualified personnel 
            are engaged for the execution of all projects. Their performance is 
            continuously monitored and supervised to ensure the effective 
            implementation of our Quality Management System, structured in 
            accordance with ISO 9001 requirements.
          </p>

          <p>
            The Company is committed to full compliance with internationally 
            recognized quality standards and applicable local regulations. 
            Our objective is to provide products and services that conform to 
            ISO 9001 standards and contractual requirements. To achieve this, 
            we have adopted a comprehensive Quality Assurance System as outlined 
            in our Quality Manual.
          </p>

          <p>
            All personnel are required to operate strictly in accordance with 
            the Quality Management System, performing their duties accurately 
            and contributing to the continual improvement of our processes. 
            The Managing Director holds overall responsibility for ensuring 
            that all employees understand the Company’s Quality Policy and 
            their individual responsibilities.
          </p>

          <p>
            A QA/QC Manager, trained in ISO 9000 Quality Systems, has been 
            appointed as the Management Representative. The QA/QC & HSE-MS 
            Department oversees the day-to-day operation of the Quality System, 
            and all quality-related matters are directed through this department.
          </p>
        </div>

        {/* Policy Statement Highlight */}
        <div className="mt-16 bg-blue-500 text-white rounded-2xl p-10">
          <h2 className="text-2xl font-semibold mb-4">
            Policy Statement
          </h2>
          <p className="leading-relaxed text-lg italic">
            "All activities undertaken by individuals or teams shall be planned 
            and executed in a manner that ensures client requirements and company 
            objectives are met safely, efficiently, and cost-effectively."
          </p>
        </div>

        {/* Objectives Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Policy Objectives
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white shadow-md rounded-2xl p-8 transition duration-300 transform hover:-translate-y-3 hover:shadow-xl">
              <ul className="space-y-4 text-gray-600 list-disc pl-6">
                <li>Develop a comprehensive understanding of customer needs.</li>
                <li>Work in close cooperation with clients, suppliers, and subcontractors to deliver quality services right the first time.</li>
                <li>Actively seek and utilize customer feedback for continuous improvement.</li>
                <li>Enhance employee capabilities to ensure safe, responsible, and professional performance.</li>
              </ul>
            </div>

            <div className="bg-white shadow-md rounded-2xl p-8 transition duration-300 transform hover:-translate-y-3 hover:shadow-xl">
              <ul className="space-y-4 text-gray-600 list-disc pl-6">
                <li>Continue to fully meet client requirements.</li>
                <li>Reduce waste and operational losses.</li>
                <li>Operate within environmental policy guidelines to promote sustainability.</li>
                <li>Continuously identify and implement improvements in working practices.</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Closing Section */}
        <div className="mt-16 text-gray-600 leading-relaxed text-lg space-y-6">
          <p>
            Achievement of these objectives requires the commitment of all 
            employees and subcontractors, each of whom is individually 
            responsible for the quality of their work.
          </p>

          <p>
            Germane Synergy Limited maintains a management structure built 
            on professional competence and experience. Continuous development 
            of operational processes, IT systems, and staff training ensures 
            sustained compliance and improvement of our Quality Management System.
          </p>

          <p>
            For every project undertaken, a structured Quality Plan is implemented 
            to ensure that client requirements are met within specified timelines 
            and budgets. Our management and supervisory staff are empowered to 
            make decisions within their defined responsibilities in accordance 
            with documented procedures.
          </p>

          <p>
            Every employee and subcontractor must understand client needs and 
            remain accountable for delivering work of the highest quality standards.
          </p>
        </div>

      </div>
    </section>
  );
}