// validation for name
export const isValidName = (name: string): boolean => {
  const regex = /^[A-Za-z]+$/
  return regex.test(name)
}

// validation for age
export const isValidAgeNumber = (age: string): boolean => {
  const ageNumber = parseInt(age)
  return !isNaN(ageNumber)
}
export const isValidAgePositive = (age: string): boolean => {
  const ageNumber = parseInt(age)
  return ageNumber > 0
}

// validation for email
export const isValidEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}
 