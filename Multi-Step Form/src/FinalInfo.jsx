import React, { useContext } from "react";
import { FormContext } from "./FormContext";

const FinalInfo = () => {
  const { formData } = useContext(FormContext);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 rounded-lg shadow-lg border">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Review Information
      </h1>

      <div className="space-y-3">
        {Object.entries(formData).map(([key, value]) => (
          <div
            key={key}
            className="flex justify-between border-b pb-2"
          >
            <span className="font-semibold capitalize">
              {key}
            </span>

            <span>{value}</span>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 bg-black text-white py-2 rounded">
        Submit
      </button>
    </div>
  );
};

export default FinalInfo;