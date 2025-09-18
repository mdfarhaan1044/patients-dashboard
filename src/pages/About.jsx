import React from "react";

function About() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-2xl font-bold">About Jarurat Care</h1>
      <p className="text-lg">
        Jarurat Care is an initiative to simplify healthcare management for
        doctors, hospitals, and clinics. Our dashboard allows you to record,
        search, and monitor patient details in one place, saving time and
        reducing errors.
      </p>

      <h2 className="text-xl font-bold">Our Mission</h2>
      <p className="text-lg">
        We aim to empower healthcare professionals with easy-to-use tools that
        improve patient care and streamline administrative tasks.
      </p>

      <h2 className="text-xl font-bold">Why Choose Us?</h2>
      <ul>
        <li>Simple and user-friendly design</li>
        <li>Secure handling of patient information</li>
        <li>Responsive interface for mobile and desktop</li>
        <li>Scalable to adapt to clinics of any size</li>
      </ul>
    </div>
  );
}

export default About;
