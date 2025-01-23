import { ButtonType, FieldType } from "@/types/types";

export const generateField = (fieldLabel: string, fieldType: FieldType, fieldId: string, fieldDefault?: string) => {
  const fieldset = document.createElement('fieldset')
  fieldset.classList.add('form__field')

  const label = document.createElement('label');
  label.textContent = `${fieldLabel}:`

  const input = document.createElement('input')
  input.type = fieldType
  input.value = fieldDefault ? fieldDefault : ''
  input.id = fieldId.toLowerCase().replaceAll(' ', '-')
  input.dataset.testid = fieldId

  fieldset.appendChild(label)
  fieldset.appendChild(input)

  return { fieldset, input, label }
}

export const generateButton = (buttonLabel: string, buttonType: ButtonType, buttonId: string) => {
  const button = document.createElement('button')
  button.type = buttonType
  button.innerText = buttonLabel
  button.id = buttonId.toLowerCase().replaceAll(' ', '-')
  button.dataset.testid = buttonId
  return button
}

export const generateResult = (fieldName: string, resultLabel: string, resultValue: string) => {
  const result = document.createElement('div')
  result.classList.add('result')

  const resultKey = document.createElement('span')
  const resultVal = document.createElement('span')

  resultKey.classList.add('result__label')
  resultVal.classList.add('result__value')
  resultVal.dataset.testid = fieldName
  resultKey.innerText = resultLabel
  resultVal.innerText = resultValue

  result.appendChild(resultKey)
  result.appendChild(resultVal)
  return result
}