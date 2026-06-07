import { createContext, useContext, useRef, useState } from "react";


export const FormContext = createContext()
export const FormProvider = ({children})=>{
      const [step,setStep] = useState(1)
      const [formData, setFormData] = useState({
        name:"",
        email:"",
        phone:"",
        address:"",
        city:"",
        state:"",
        education:"",
        skills:"",
        experience:""
      })
 
    const handleInfo = () => {
        if (step ===1 && (!formData.name || !formData.email || !formData.phone)){
         return alert("Please fill all the fields")
        }
          if (step ===2 && (!formData.address || !formData.city || !formData.state)){
         return alert("Please fill all the fields")
        }
          if (step ===3 && (!formData.skills || !formData.education || !formData.experience)){
         return alert("Please fill all the fields")
        }
        setStep(prev=>prev + 1)
        console.log(formData);
    }
    const handlePreviousButton = () => {
        setStep(step - 1)
    }

    return <FormContext.Provider value={{ formData, setFormData, setStep, step,handleInfo,handlePreviousButton}}>
        {children}
    </FormContext.Provider>
}