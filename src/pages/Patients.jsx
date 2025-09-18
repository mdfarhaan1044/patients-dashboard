import React, { useState } from "react";
import PatientCard from "../components/PatientCard";
import patientsData from "../data/patients.json";
import PatientModel from "../components/PatientModel";

function Patients() {
  const [patients] = useState(patientsData);
  const [selectedPatient, setSelectedPatient] = useState(null);

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {patients.map((patient) => (
          <PatientCard
            key={patient.patient_id}
            patient={patient}
            setSelectedPatient={setSelectedPatient}
          />
        ))}
      </div>
      {selectedPatient && (
        <PatientModel
          patient={selectedPatient}
          onClose={() => setSelectedPatient(null)}
        />
      )}
    </div>
  );
}

export default Patients;
