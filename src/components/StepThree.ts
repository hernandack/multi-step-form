import { customer } from "@/stores/customer"
import type { Customer } from "@/types/types"
import { generateField, generateButton } from "@/utils/fieldGenerator"

export function StepThree(formData: Customer, onNext: () => void, onPrev: () => void): HTMLElement {
  const container = document.createElement('form')
  const heading = document.createElement('h2')
  heading.dataset.testid = 'title'
  heading.textContent = 'Step 3'

  const validationPanel = document.createElement('div')
  validationPanel.classList.add('validation')

  const inputSeat = generateField('Seat', 'text', 'seat', customer.seat)
  const inputFood = generateField('Food', 'text', 'food', customer.food)
  const inputAllergies = generateField('Allergies', 'text', 'allergies', customer.allergies)
  const inputButtonBack = generateButton('Back', 'button', 'back')
  const inputButtonNext = generateButton('Next', 'submit', 'submit')

  const buttonFields = document.createElement('div')
  buttonFields.classList.add('form__buttons')

  // Add event listener for Next button
  inputButtonNext.addEventListener('click', (e: Event) => {
    e.preventDefault()
    validationPanel.textContent = ''
    let errorFound: boolean = false

    if (inputSeat.input.value === '') {
      validationPanel.innerText += 'Seat is a required field.\n'
      errorFound = true
    }
    if (inputFood.input.value === '') {
      validationPanel.innerText += 'Food is a required field.\n'
      errorFound = true
    }
    if (inputAllergies.input.value === '') {
      validationPanel.innerText += 'Allergies is a required field.\n'
      errorFound = true
    }

    if (errorFound) return

    formData.seat = inputSeat.input.value
    formData.food = inputFood.input.value
    formData.allergies = inputAllergies.input.value
    onNext()
  });

  inputButtonBack.addEventListener('click', (e: Event) => {
    e.preventDefault()
    onPrev()
  })

  container.appendChild(heading)
  container.appendChild(validationPanel)
  container.appendChild(inputSeat.fieldset)
  container.appendChild(inputFood.fieldset)
  container.appendChild(inputAllergies.fieldset)
  buttonFields.appendChild(inputButtonBack)
  buttonFields.appendChild(inputButtonNext)
  container.appendChild(buttonFields)

  return container;
}
