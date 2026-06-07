import { useContext } from "react";
import { FormContext } from "./FormContext";

const Address = () => {
        const { formData, setFormData, setStep, step,handlePreviousButton, handleInfo} =  useContext(FormContext)
    
    // const handleAddressInfo = () => {
    //     if (!formData.address || !formData.city || !formData.state) {
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
            <h2>Address Details</h2>

            <input
                type="text"
                placeholder="Address"
                value={formData.address}
                onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                }
            />

            <input
                type="text"
                placeholder="City"
                value={formData.city}
                onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                }
            />

            <input
                type="text"
                placeholder="State"
                value={formData.state}
                onChange={(e) =>
                    setFormData({ ...formData, state: e.target.value })
                }
            />
             <button onClick={handleInfo}>Next</button>
            <button onClick={handlePreviousButton}>Previous</button>
        </div>
    );
};

export default Address;