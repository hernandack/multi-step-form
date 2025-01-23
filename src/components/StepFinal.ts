import type { Customer } from "@/types/types"
import { generateButton, generateResult } from "@/utils/fieldGenerator"

export function StepFinal(formData: Customer, onPrev: () => void): HTMLElement {
  const container = document.createElement('div')
  container.classList.add('results')
  const heading = document.createElement('h2')
  heading.textContent = 'Customer Detail'

  const elFirstName = generateResult('firstName', 'First Name', formData.firstName)
  const elLastName = generateResult('lastName', 'Last Name', formData.lastName)
  const elAge = generateResult('age', 'Age', formData.age.toString())
  const elPhone = generateResult('phone', 'Phone', formData.phone)
  const elEmail = generateResult('email', 'Email', formData.email)
  const elSeat = generateResult('seat', 'Seat', formData.seat)
  const elFood = generateResult('food', 'Food', formData.food)
  const elAllergies = generateResult('allergies', 'Allergies', formData.allergies)
  const inputButtonBack = generateButton('Back', 'button', 'back')
  const inputButtonNext = generateButton('Next', 'submit', 'submit')

  const buttonFields = document.createElement('div')
  buttonFields.classList.add('form__buttons')

  // Add event listener for Next button
  inputButtonNext.addEventListener('click', (e: Event) => {
    e.preventDefault()
  });

  inputButtonBack.addEventListener('click', (e: Event) => {
    e.preventDefault()
    onPrev()
  })

  container.appendChild(heading)
  container.appendChild(elFirstName)
  container.appendChild(elLastName)
  container.appendChild(elAge)
  container.appendChild(elPhone)
  container.appendChild(elEmail)
  container.appendChild(elSeat)
  container.appendChild(elFood)
  container.appendChild(elAllergies)
  buttonFields.appendChild(inputButtonBack)
  buttonFields.appendChild(inputButtonNext)
  container.appendChild(buttonFields)

  return container;
}
