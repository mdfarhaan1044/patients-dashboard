import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearSelectedPatient } from "../slices/patientsSlice";

function PatientModel({ patient }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const dispatch = useDispatch();

  const handleBackdropClick = (e) => {
    if (e.target.id === "modal-backdrop") {
      dispatch(clearSelectedPatient());
    }
  };

  if (!patient) return null;

  return (
    <div
      id="modal-backdrop"
      className="fixed inset-0 flex items-center justify-center 
             bg-black/40 backdrop-blur-sm z-50"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-gradient-to-br from-blue-50 to-blue-100 w-11/12 md:w-2/3 lg:w-1/2 p-6 rounded-xl shadow-lg relative 
               overflow-y-auto max-h-[80vh] hide-scrollbar"
      >
        {/* Patient Name */}
        <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">
          {patient.name.first_name} {patient.name.last_name}
        </h2>

        {/* Basic Info */}
        <p className="text-gray-700 mb-1">
          <strong>Date of Birth:</strong> {patient.dob}
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Gender:</strong> {patient.gender}
        </p>

        {/* Allergies */}
        {patient.allergies && patient.allergies.length > 0 && (
          <div className="mb-4">
            <strong className="block text-lg text-green-600">Allergies:</strong>
            <ul className="list-disc list-inside text-gray-700">
              {patient.allergies.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Medical History */}
        {patient.medical_history && patient.medical_history.length > 0 && (
          <div className="mb-4">
            <strong className="block text-lg text-green-600">
              Medical History:
            </strong>
            <ul className="list-disc list-inside text-gray-700">
              {patient.medical_history.map((item, index) => (
                <li key={index}>{item.condition}</li>
              ))}
            </ul>
          </div>
        )}
        {/* Current Medications */}
        {patient.current_medications &&
          patient.current_medications.length > 0 && (
            <div className="mb-6">
              <strong className="block text-lg text-green-600">
                Current Medications:
              </strong>
              <ul className="list-disc list-inside text-gray-700">
                {patient.current_medications.map((item, index) => (
                  <li key={index}>
                    {item.medication_name} ({item.dosage}) – {item.frequency}
                  </li>
                ))}
              </ul>
            </div>
          )}

        {/* Close Button */}
        <button
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg block mx-auto"
          onClick={() => dispatch(clearSelectedPatient())}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default PatientModel;
