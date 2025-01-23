export type Customer = {
  firstName: string
  lastName: string
  age: number
  phone: string
  email: string
  seat: string
  food: string
  allergies: string
}

export type Step = {
  index: number,
  doBackStep?: () => void,
  doNextStep?: () => void,
}

export type FieldType = 'text' | 'email' | 'number'
export type ButtonType = 'button' | 'submit'
export type ResultType = string | string[]