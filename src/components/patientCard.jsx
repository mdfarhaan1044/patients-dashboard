import React, { useState } from "react";
import patientsData from "../data/patients.json";
import PatientModel from "./PatientModel";

function PatientCard() {
  const [patients] = useState(patientsData);
  const [selectedPatient, setSelectedPatient] = useState(null);

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {patients.map((patient) => (
          <div
            className="border border-amber-600 p-4 m-4 rounded-lg justify-center items-center flex flex-col"
            key={patient.patient_id}
          >
            <h2 className="text-2xl font-bold">
              {patient.name.first_name} {patient.name.last_name}
            </h2>
            <p>{patient.contact.phone}</p>
            <p>{patient.contact.email}</p>
            <p>{patient.contact.address.street}</p>
            <p>
              {patient.contact.address.city}, {patient.contact.address.state}{" "}
              {patient.contact.address.zip_code}
            </p>
            <button
              className="bg-amber-600 text-white p-2 rounded-lg m-4 cursor-pointer"
              onClick={() => setSelectedPatient(patient)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
      <div>
        <PatientModel
          patient={selectedPatient}
          onClose={() => setSelectedPatient(null)}
        />
      </div>
    </div>
  );
}

export default PatientCard;
