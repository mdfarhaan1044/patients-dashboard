import React from "react";

function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-blue-600 text-center mb-6">
        About Jarurat Care
      </h1>

      {/* Intro */}
      <p className="text-gray-700 text-center text-lg md:text-xl max-w-2xl mb-6">
        Jarurat Care is an initiative to simplify healthcare management for
        doctors, hospitals, and clinics. Our dashboard allows you to record,
        search, and monitor patient details in one place, saving time and
        reducing errors.
      </p>

      {/* Mission */}
      <div className="text-gray-800 mb-6 max-w-2xl">
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          We aim to empower healthcare professionals with easy-to-use tools that
          improve patient care and streamline administrative tasks.
        </p>
      </div>

      {/* Why Choose Us */}
      <div className="text-gray-800 mb-6 max-w-2xl">
        <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg md:text-xl">
          <li>Simple and user-friendly design</li>
          <li>Secure handling of patient information</li>
          <li>Responsive interface for mobile and desktop</li>
          <li>Scalable to adapt to clinics of any size</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
