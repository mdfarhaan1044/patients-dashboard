import React, { useState } from "react";
import patientsData from "../data/patients.json";

export default function PatientCard() {
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

      {selectedPatient && (
        <div className="fixed inset-0 flex items-center justify-center bg-blur bg-opacity-50">
          <div className="bg-gray-200 p-4 rounded-lg">
            <h2 className="text-2xl font-bold justify-center items-center">
              {selectedPatient.name.first_name} {selectedPatient.name.last_name}
            </h2>
            <p>{"Date of Birth: " + selectedPatient.dob}</p>
            <p>{"Gender: " + selectedPatient.gender}</p>
            <strong>Allergies:</strong>
            <ul className="list-disc list-inside">
              {selectedPatient.allergies &&
              selectedPatient.allergies.length > 0 ? (
                selectedPatient.allergies.map((item, index) => (
                  <li key={index}>{item}</li>
                ))
              ) : (
                <li>None</li>
              )}
            </ul>
            <strong>Medical History:</strong>
            <ul className="list-disc list-inside">
              {selectedPatient.medical_history &&
              selectedPatient.medical_history.length > 0
                ? selectedPatient.medical_history.map((item, index) => (
                    <li key={index}>{item.condition}</li>
                  ))
                : "None"}
            </ul>
            <strong>Current Medications:</strong>
            <ul className="list-disc list-inside">
              {selectedPatient.current_medications &&
              selectedPatient.current_medications.length > 0
                ? selectedPatient.current_medications.map((item, index) => (
                    <li key={index}>
                      {"The patient should take " +
                        item.medication_name +
                        " (" +
                        item.dosage +
                        ") medicine with frequency of " +
                        item.frequency}
                    </li>
                  ))
                : "None"}
            </ul>

            <button
              className="bg-amber-600 text-white p-2 rounded-lg m-4 cursor-pointer"
              onClick={() => setSelectedPatient(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
