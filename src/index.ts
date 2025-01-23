import { StepThree } from "./components/StepThree"
import { StepOne } from "./components/StepOne"
import { StepTwo } from "./components/StepTwo"
import { StepFinal } from "./components/StepFinal"

import { customer } from "@/stores/customer"
import { step } from "./stores/step"
import type { Step } from "./types/types"

const stepData: Step = { index: 1 }

const multiStepForm = () => {
  const app = document.querySelector('#app')

  if (app) {
    const formContainer = document.querySelector('#form-container')

    // advance step
    const nextForm = () => {
      step.doNextStep()
      renderForm()
      console.log(stepData)
    }

    // previous step
    const backForm = () => {
      step.doBackStep()
      renderForm()
    }

    // render the form content dynamically based on current step.index
    const renderForm = () => {
      if (!formContainer) return
      const currentPath = window.location.pathname
      if (currentPath === '/step2') {
        step.setStep(2)
      } else if (currentPath === '/step3') {
        step.setStep(3)
      }

      
      while (formContainer.firstChild) {
        formContainer.removeChild(formContainer.firstChild)
      }

      let stepContent: HTMLElement
      
      if (step.index === 1) {
        stepContent = StepOne(customer, nextForm)
      } else if (step.index === 2 || currentPath === '/step2') {
        stepContent = StepTwo(customer, nextForm, backForm)
      } else if (step.index === 3 || currentPath === '/step3') {
        stepContent = StepThree(customer, nextForm, backForm)
      } else if (step.index === 4) { // finish or last step to show the customer data
        stepContent = StepFinal(customer, backForm)
      } else {
        stepContent = document.createElement('div')
        stepContent.textContent = 'Something went wrong...'
      }

      formContainer?.appendChild(stepContent)
    }

    // render form first
    renderForm()
  }
}

// Make sure the DOM loaded first
document.addEventListener('DOMContentLoaded', () => {
  multiStepForm()
})