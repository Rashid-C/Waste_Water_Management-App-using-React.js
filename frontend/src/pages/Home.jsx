import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const wasteWaterInfo = [
    {
      id: 1,
      title: "Primary Treatment",
      imageUrl:
        "https://t4.ftcdn.net/jpg/08/02/78/09/360_F_802780995_kAH9xsXsWG55gKTcTCnbgWlhLIAZhDaf.jpg",
      description:
        "Physical removal of solids through screening and sedimentation, removing 60% of suspended solids.",
    },
    {
      id: 2,
      title: "Secondary Treatment",
      imageUrl:
        "https://media.istockphoto.com/id/628811958/photo/wastewater-treatment-plant-during-construction.jpg?s=612x612&w=0&k=20&c=twvx-qANT2QSxsTrwARgbOauCYwjzbl-1Zfu_yVaQWg=",
      description:
        "Biological processes where microorganisms break down organic matter, removing up to 90% of organic content.",
    },
    {
      id: 3,
      title: "Tertiary Treatment",
      imageUrl:
        "https://media.istockphoto.com/id/505176828/photo/water-treatment-plant-at-sunset.jpg?s=612x612&w=0&k=20&c=TqbiqmeZcjlZeB2TLoWPrRIyVsYx2m8mZC4rMbNmsXc=",
      description:
        "Advanced cleaning including filtration, disinfection, and nutrient removal for environmental compliance.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold lg:text-5xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Waste Water Management Solutions
        </h1>
        <p className="text-gray-500 text-xs sm:text-sm max-w-2xl">
          Discover comprehensive waste water treatment solutions that protect
          our environment and ensure sustainable water management for future
          generations.
        </p>
        <Link
          to="/processes"
          className="text-xs sm:text-sm text-indigo-500 font-bold hover:underline"
        >
          Learn More About Our Processes
        </Link>
      </div>

      {/* Featured Section */}
      <div className="p-3 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto p-8">
          <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Our Treatment Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wasteWaterInfo.map((info) => (
              <div
                key={info.id}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={info.imageUrl}
                    alt={info.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
                    onError={(e) => {
                      e.target.src = `/api/placeholder/400/300`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-white font-semibold px-4 py-2 bg-black/30 rounded-lg backdrop-blur-sm">
                      View Details
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {info.description}
                  </p>
                  <Link
                    to={`/process/${info.id}`}
                    className="mt-4 inline-block text-sm text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="max-w-6xl mx-auto p-3 flex flex-col items-center text-center py-16">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Ready to Implement Sustainable Solutions?
        </h2>
        <p className="text-gray-500 max-w-2xl mb-8">
          Our expert team is here to help you design and implement the most
          effective waste water management system for your needs.
        </p>
        <div className="flex gap-4">
          <Link
            to="/contact"
            className="px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            Contact Us
          </Link>
          <Link
            to="/services"
            className="px-6 py-3 border border-indigo-500 text-indigo-500 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors"
          >
            Our Services
          </Link>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 py-16">
        <div className="max-w-6xl mx-auto p-3">
          <h2 className="text-2xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Benefits of Professional Waste Water Management
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Environmental Protection",
                description:
                  "Safeguard natural water bodies and ecosystems through proper treatment.",
              },
              {
                title: "Resource Recovery",
                description:
                  "Convert waste products into valuable resources like biogas and fertilizers.",
              },
              {
                title: "Regulatory Compliance",
                description:
                  "Meet or exceed all environmental standards and regulations.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
