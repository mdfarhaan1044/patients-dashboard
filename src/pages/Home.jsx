import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-blue-600 text-center mb-6">
        Welcome to Jarurat Care
      </h1>

      {/* Description */}
      <p className="text-gray-700 text-center text-lg md:text-xl max-w-2xl mb-6">
        Jarurat Care is a modern healthcare platform that helps you manage
        patient records with ease. From storing essential details to quick
        access to patient history, our dashboard makes healthcare management
        simple and effective.
      </p>

      {/* Features */}
      <div className="text-gray-800 mb-6 max-w-2xl">
        <h2 className="text-2xl font-semibold mb-2">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <span className="font-medium">Manage Patients –</span> Keep all
            patient records organized and accessible anytime.
          </li>
          <li>
            <span className="font-medium">Easy Search –</span> Quickly find
            patients with our smart search feature.
          </li>
          <li>
            <span className="font-medium">Insights –</span> Get meaningful
            insights to improve patient care and services.
          </li>
        </ul>
      </div>

      {/* Button */}
      <Link
        to="/patients"
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition"
      >
        View All Patients
      </Link>
    </div>
  );
}

export default Home;
