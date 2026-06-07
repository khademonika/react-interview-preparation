import React, { useContext, useState } from 'react'

import { FormContext, FormProvider } from './FormContext'
import FormSteps from './FormSteps'

const App = () => {
  const [step, setStep] = useState(1)
  
  return (
    
    <FormProvider>
      <FormSteps/>
    </FormProvider>
  )
}

export default App
