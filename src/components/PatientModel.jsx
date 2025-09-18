import React, { useEffect } from "react";

function PatientModel({ patient, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleBackdropClick = (e) => {
    if (e.target.id === "modal-backdrop") {
      onClose();
    }
  };

  if (!patient) return null;

  return (
    <div
      id="modal-backdrop"
      className="fixed inset-0 flex items-center justify-center bg-blur bg-opacity-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-gray-200 p-4 rounded-lg">
        <h2 className="text-2xl font-bold justify-center items-center">
          {patient.name.first_name} {patient.name.last_name}
        </h2>
        <p>{"Date of Birth: " + patient.dob}</p>
        <p>{"Gender: " + patient.gender}</p>
        <strong>Allergies:</strong>
        <ul className="list-disc list-inside">
          {patient.allergies && patient.allergies.length > 0 ? (
            patient.allergies.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <li>None</li>
          )}
        </ul>
        <strong>Medical History:</strong>
        <ul className="list-disc list-inside">
          {patient.medical_history && patient.medical_history.length > 0
            ? patient.medical_history.map((item, index) => (
                <li key={index}>{item.condition}</li>
              ))
            : "None"}
        </ul>
        <strong>Current Medications:</strong>
        <ul className="list-disc list-inside">
          {patient.current_medications && patient.current_medications.length > 0
            ? patient.current_medications.map((item, index) => (
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
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default PatientModel;
