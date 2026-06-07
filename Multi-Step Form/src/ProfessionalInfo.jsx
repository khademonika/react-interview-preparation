import { useContext } from "react";
import { FormContext } from "./FormContext";

const ProfessionalInfo = () => {
        const { formData, setFormData, setStep, step,handlePreviousButton,handleInfo} =  useContext(FormContext)
    
    // const handleProfessionalInfo = () => {
    //     if (!formData.skills || !formData.education || !formData.experience) {
    //         return alert("Please fill all the fields")
    //     }
    //     setStep(step + 1)
    //     console.log(formData);
    // }
    // const handlePreviousButton = () => {
    //     setStep(step - 1)
    // }
    return (
        <div className="step-container">
            <h2>Professional Information</h2>

            <input
                type="text"
                placeholder="Education"
                value={formData.education}
                onChange={(e) =>
                    setFormData({ ...formData, education: e.target.value })
                }
            />

            <input
                type="text"
                placeholder="Skills"
                value={formData.skills}
                onChange={(e) =>
                    setFormData({ ...formData, skills: e.target.value })
                }
            />

            <textarea
                placeholder="Experience"
                value={formData.experience}
                onChange={(e) =>
                    setFormData({ ...formData, experience: e.target.value })
                }
            />
            <button onClick={handleInfo}>Completed</button>

            <button onClick={handlePreviousButton}>Previous</button>
        </div>
    );
};

export default ProfessionalInfo;