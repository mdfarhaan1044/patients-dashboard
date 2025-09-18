import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-2xl font-bold">Welcome to Jarurat Care</h1>
      <p className="text-lg">
        Jarurat Care is a modern healthcare platform that helps you manage
        patient records with ease. From storing essential details to quick
        access to patient history, our dashboard makes healthcare management
        simple and effective.
      </p>

      <h2 className="text-xl font-bold">Features</h2>
      <ul>
        <li>
          Manage Patients – Keep all patient records organized and accessible
          anytime.
        </li>
        <li>
          Easy Search – Quickly find patients with our smart search feature.
        </li>
        <li>
          Insights – Get meaningful insights to improve patient care and
          services.
        </li>
      </ul>
      <div className="flex gap-4  justify-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Add Patient
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          <Link to="/patients">View all Patients</Link>
        </button>
      </div>
    </div>
  );
}

export default Home;
