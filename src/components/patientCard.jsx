import React, { useState } from "react";
import patients from "../data/patients.json";

export default function PatientCard() {
  const [patientsInfo] = useState(patients);

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {patientsInfo.map((patient) => (
          <div
            className="border border-amber-600 p-4 m-4 rounded-lg justify-center items-center flex flex-col"
            key={patient.patient_id}
          >
            <h2>
              {patient.name.first_name} {patient.name.last_name}
            </h2>
            <p>{patient.contact.phone}</p>
            <p>{patient.contact.email}</p>
            <p>{patient.contact.address.street}</p>
            <p>
              {patient.contact.address.city}, {patient.contact.address.state}{" "}
              {patient.contact.address.zip_code}
            </p>
            <button className="bg-amber-600 text-white p-2 rounded-lg m-4 cursor-pointer">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
