import { customer } from "@/stores/customer"
import type { Customer } from "@/types/types"
import { generateField, generateButton } from "@/utils/fieldGenerator"
import { isValidName, isValidAgeNumber, isValidAgePositive } from "@/utils/validator"

export function StepOne(formData: Customer, onNext: () => void): HTMLElement {
  const container = document.createElement('form')
  const heading = document.createElement('h2')
  heading.dataset.testid = 'title'
  heading.textContent = 'Step 1'

  const validationPanel = document.createElement('div')
  validationPanel.classList.add('validation')

  const inputFirstName = generateField('First Name', 'text', 'firstName', customer.firstName)
  const inputLastName = generateField('Last Name', 'text', 'lastName', customer.lastName)
  const inputAge = generateField('Age', 'number', 'age', customer?.age === 0 ? '' : customer.age?.toString())
  const inputButtonBack = generateButton('Back', 'button', 'back')
  const inputButtonNext = generateButton('Next', 'submit', 'submit')

  const buttonFields = document.createElement('div')
  buttonFields.classList.add('form__buttons')

  // Add event listener for Next button
  inputButtonNext.addEventListener('click', (e: Event) => {
    e.preventDefault()
    validationPanel.textContent = ''
    let errorFound: boolean = false

    if (inputFirstName.input.value === '') {
      validationPanel.innerText += 'First name is a required field.\n'
      errorFound = true
    }
    if (!isValidName(inputFirstName.input.value)) {
      validationPanel.innerText += 'First name should not contain numbers.\n'
      errorFound = true
    }
    if (inputLastName.input.value === '') {
      validationPanel.innerText += 'Last name is a required field.\n'
      errorFound = true
    }
    if (!isValidName(inputLastName.input.value)) {
      validationPanel.innerText += 'Last name should not contain numbers.\n'
      errorFound = true
    }
    if (!isValidAgeNumber(inputAge.input.value)) {
      validationPanel.innerText += 'Age must be a number.\n'
      errorFound = true
    }
    if (!isValidAgePositive(inputAge.input.value)) {
      validationPanel.innerText += 'Age should be positive.\n'
      errorFound = true
    }

    if (errorFound) return

    formData.firstName = inputFirstName.input.value
    formData.lastName = inputLastName.input.value
    formData.age = parseInt(inputAge.input.value)
    customer.firstName = inputFirstName.input.value
    customer.lastName = inputLastName.input.value
    customer.age = parseInt(inputAge.input.value)
    onNext()
  });

  inputButtonBack.addEventListener('click', (e: Event) => {
    e.preventDefault()
    console.log('can not go back')
  })

  container.appendChild(heading)
  container.appendChild(validationPanel)
  container.appendChild(inputFirstName.fieldset)
  container.appendChild(inputLastName.fieldset)
  container.appendChild(inputAge.fieldset)
  buttonFields.appendChild(inputButtonBack)
  buttonFields.appendChild(inputButtonNext)
  container.appendChild(buttonFields)

  return container;
}
