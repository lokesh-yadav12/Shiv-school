import React from "react";

const About = () => {
  return (
    <div className="py-12 bg-gray-900 text-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-blue-400 mb-6">
          About Shiv School
        </h1>
        <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
          Shiv School is committed to academic excellence and the all-round
          development of students.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg hover:bg-gray-700 transition">
            <h2 className="text-2xl font-semibold text-blue-300 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-300">
              Nurture confident, compassionate and competent learners.
            </p>
          </div>
          <div className="bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg hover:bg-gray-700 transition">
            <h2 className="text-2xl font-semibold text-blue-300 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-300">
              Build leaders who contribute to society with knowledge and ethics.
            </p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-md p-8 mb-12 hover:shadow-lg hover:bg-gray-700 transition">
          <h2 className="text-2xl font-semibold text-blue-300 mb-4">
            Our History
          </h2>
          <p className="text-gray-300">
            Since 2005, Shiv School has grown with a strong focus on values and
            modern education.
          </p>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-md p-8 hover:shadow-lg hover:bg-gray-700 transition">
          <h2 className="text-2xl font-semibold text-blue-300 mb-4">
            Core Values
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Integrity</li>
            <li>Respect</li>
            <li>Excellence</li>
            <li>Innovation</li>
            <li>Community Service</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
