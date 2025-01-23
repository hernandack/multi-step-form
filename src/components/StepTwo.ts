import { customer } from "@/stores/customer"
import type { Customer } from "@/types/types"
import { generateField, generateButton } from "@/utils/fieldGenerator"
import { isValidEmail } from "@/utils/validator";

export function StepTwo(formData: Customer, onNext: () => void, onPrev: () => void): HTMLElement {
  const container = document.createElement('form')
  const heading = document.createElement('h2')
  heading.dataset.testid = 'title'
  heading.textContent = 'Step 2'

  const validationPanel = document.createElement('div')
  validationPanel.classList.add('validation')

  const inputPhone = generateField('Phone', 'text', 'phone', customer.phone)
  const inputEmail = generateField('Email', 'email', 'email', customer.email)
  const inputButtonBack = generateButton('Back', 'button', 'back')
  const inputButtonNext = generateButton('Next', 'submit', 'submit')

  const buttonFields = document.createElement('div')
  buttonFields.classList.add('form__buttons')

  // Add event listener for Next button
  inputButtonNext.addEventListener('click', (e: Event) => {
    e.preventDefault()
    validationPanel.textContent = ''
    let errorFound: boolean = false

    if (inputPhone.input.value === '') {
      validationPanel.innerText += 'Phone number is a required field.\n'
      errorFound = true
    }
    if (inputEmail.input.value === '') {
      validationPanel.innerText += 'Email is a required field.\n'
      errorFound = true
    }
    if (!isValidEmail(inputEmail.input.value)) {
      validationPanel.innerText += 'Email should have correct format.\n'
      errorFound = true
    }

    if (errorFound) return

    formData.phone = inputPhone.input.value
    formData.email = inputEmail.input.value
    onNext()
  });

  inputButtonBack.addEventListener('click', (e: Event) => {
    e.preventDefault()
    onPrev()
  })

  container.appendChild(heading)
  container.appendChild(validationPanel)
  container.appendChild(inputPhone.fieldset)
  container.appendChild(inputEmail.fieldset)
  buttonFields.appendChild(inputButtonBack)
  buttonFields.appendChild(inputButtonNext)
  container.appendChild(buttonFields)

  return container;
}
