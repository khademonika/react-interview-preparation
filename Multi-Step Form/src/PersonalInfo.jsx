import { useContext, useEffect, useRef } from "react";
import { FormContext } from "./FormContext";

const PersonalInfo = () => {
    const { formData, setFormData, setStep, step, handlePreviousButton, handleInfo } = useContext(FormContext)
    const emailRef = useRef(null)
    const phoneRef = useRef(null)
    const inputRef = useRef(null)
useEffect(()=>{
    inputRef.current.focus()
},[])
    return (
        <div className="step-container">
            <h2>Personal Information</h2>

            <input
                type="text"
                name="name"
                ref={inputRef}
                placeholder="Full Name"
                onKeyDown={(e) => {
                    if (e.key == "Enter") {
                        emailRef.current?.focus()
                    }
                }}
                value={formData.name}
                onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                }
            />

            <input
                type="email"
                placeholder="Email"
                name="email"
                ref={emailRef}
                onKeyDown={(e) => {
                    if (e.key == "Enter") {
                        phoneRef.current?.focus()
                    }
                }}
                value={formData.email}
                onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                }
            />

            <input
                type="tel"
                placeholder="Phone Number"
                name="phone"
                ref={phoneRef}
                onKeyDown={(e) => {
                    if (e.key == "Enter") {
                        handleInfo()
                    }
                }}
                value={formData.phone}
                onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                }
            />
            <button onClick={handleInfo}>Next</button>
        </div>
    );
};

export default PersonalInfo;