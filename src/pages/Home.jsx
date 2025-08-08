import React, { useState } from "react";
import { motion } from "framer-motion";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Link } from "react-router-dom";
import { FaChalkboardTeacher, FaBook, FaRunning, FaCalendarAlt } from "react-icons/fa";

import im1 from "../images/image2.webp";
import im2 from "../images/image4.webp";
import im3 from "../images/image5.webp";
import im4 from "../images/image6.webp";
import im5 from "../images/image7.webp";

const features = [
  {
    icon: <FaChalkboardTeacher className="text-4xl text-yellow-300" />,
    title: "Expert Faculty",
    desc: "Experienced teachers focusing on conceptual learning.",
    details:
      "Our faculty are trained in modern pedagogy, mentoring students individually and conducting regular workshops."
  },
  {
    icon: <FaBook className="text-4xl text-green-300" />,
    title: "Strong Curriculum",
    desc: "CBSE and activity-based syllabus.",
    details:
      "Balanced curriculum combining academics, critical thinking and hands-on activities for real learning."
  },
  {
    icon: <FaRunning className="text-4xl text-orange-300" />,
    title: "Sports & Clubs",
    desc: "Multiple sports and co-curricular activities.",
    details:
      "We have dedicated coaching, inter-school teams and many clubs to develop skills beyond classroom."
  },
  {
    icon: <FaCalendarAlt className="text-4xl text-red-300" />,
    title: "Events & Trips",
    desc: "Annual day, excursions and fests.",
    details:
      "Regular events, field trips and cultural fests to ensure holistic exposure and learning."
  }
];

const galleryImages = [im4, im5, im2, im3];

export default function Home() {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <div className="bg-[#0f2226] text-gray-100 min-h-screen">
      {/* HERO */}
      <section className="bg-gradient-to-r from-[#0f2a31] to-[#072228] py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="md:w-1/2"
          >
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Welcome to <span className="text-yellow-300">Shiv School</span>
            </h1>
            <p className="mt-4 text-gray-300">
              A place where learning meets character — holistic education for every child. Modern infrastructure, caring faculty and a future-ready curriculum.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link to="/admissions" className="bg-yellow-400 text-blue-900 px-5 py-2 rounded font-semibold">
                Apply Now
              </Link>
              <Link to="/about" className="px-5 py-2 border border-gray-600 rounded">
                Learn More
              </Link>
            </div>
          </motion.div>
          <motion.img
            src={im1}
            alt="Shiv School"
            className="md:w-1/2 rounded-lg shadow-lg object-cover"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          />
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto bg-[#13272d] rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">What We Offer</h2>
            <p className="text-gray-300 mt-3">
              Explore the facilities and opportunities we provide to ensure holistic development of every student.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <motion.button
                key={i}
                onClick={() => setSelectedFeature(f)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#1c3238] hover:bg-[#234249] p-6 rounded-xl shadow-md text-left flex flex-col gap-3"
              >
                {f.icon}
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="text-sm text-gray-300">{f.desc}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Modal */}
      {selectedFeature && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/70" onClick={() => setSelectedFeature(null)} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative bg-[#0f1718] max-w-3xl w-full mx-4 rounded-xl shadow-2xl p-6"
          >
            <button
              onClick={() => setSelectedFeature(null)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white text-xl"
            >
              ×
            </button>
            <div className="mb-4 flex items-center gap-4">
              <div className="text-3xl">{selectedFeature.icon}</div>
              <h3 className="text-2xl font-bold">{selectedFeature.title}</h3>
            </div>
            <p className="text-gray-300">{selectedFeature.details}</p>
          </motion.div>
        </div>
      )}

      {/* CAMPUS + GALLERY */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto bg-[#13272d] rounded-2xl p-8 shadow-md">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold">Discover Our Campus</h3>
              <p className="mt-3 text-gray-300">
                Modern infrastructure, safe campus and laboratories that bring science and learning alive.
              </p>
              <div className="mt-4">
                <Link
                  to="/gallery"
                  className="px-4 py-2 border border-gray-400 rounded hover:bg-white hover:text-black"
                >
                  View Full Gallery
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {galleryImages.map((img, idx) => (
                <motion.img
                  key={idx}
                  src={img}
                  alt={`campus-${idx}`}
                  className="w-full h-40 object-cover rounded cursor-pointer"
                  whileHover={{ scale: 1.03 }}
                  onClick={() => {
                    setPhotoIndex(idx);
                    setLightboxOpen(true);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={photoIndex}
          slides={galleryImages.map((src) => ({ src }))}
        />
      )}
    </div>
  );
}
