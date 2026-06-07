import { useContext } from "react";
import ProfessionalInfo from './ProfessionalInfo'
import PersonalInfo from './PersonalInfo'
import Address from './Address '
import { FormContext } from "./FormContext";
import FinalInfo from "./FinalInfo";

const FormSteps = () => {
  const { step } = useContext(FormContext);

  return (
    <>
      {step === 1 && <PersonalInfo />}
      {step === 2 && <Address />}
      {step === 3 && <ProfessionalInfo />}
      {step === 4 && <FinalInfo />}

    </>
  );
};

export default FormSteps;