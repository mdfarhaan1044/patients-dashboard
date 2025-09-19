import React from "react";
import { useDispatch } from "react-redux";
import { selectPatient } from "../slices/patientsSlice";

function PatientCard({ patient }) {
  const dispatch = useDispatch();

  return (
    <div
      key={patient.patient_id}
      className="border border-green-500 bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center hover:shadow-md transition"
    >
      {/* Name */}
      <h2 className="text-xl font-bold text-blue-700 mb-2">
        {patient.name.first_name} {patient.name.last_name}
      </h2>

      {/* Contact */}
      <p className="text-gray-700">{patient.contact.phone}</p>
      <p className="text-gray-700">{patient.contact.email}</p>
      <p className="text-gray-700">{patient.contact.address.street}</p>
      <p className="text-gray-700">
        {patient.contact.address.city}, {patient.contact.address.state}{" "}
        {patient.contact.address.zip_code}
      </p>

      {/* Button */}
      <button
        className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-5 rounded-lg cursor-pointer transition"
        onClick={() => dispatch(selectPatient(patient))}
      >
        View Details
      </button>
    </div>
  );
}

export default PatientCard;
