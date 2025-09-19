import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PatientCard from "../components/PatientCards";
import PatientModel from "../components/PatientModel";
import { selectPatient, clearSelectedPatient } from "../slices/patientsSlice";

function Patients() {
  const dispatch = useDispatch();
  const patients = useSelector((state) => state.patients.list);
  const selectedPatient = useSelector(
    (state) => state.patients.selectedPatient
  );

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {patients.map((patient) => (
          <PatientCard
            key={patient.patient_id}
            patient={patient}
            setSelectedPatient={(p) => dispatch(selectPatient(p))}
          />
        ))}
      </div>
      {selectedPatient && (
        <PatientModel
          patient={selectedPatient}
          onClose={() => dispatch(clearSelectedPatient())}
        />
      )}
    </div>
  );
}

export default Patients;
