export const customer = {
  // state
  firstName: '' as string,
  lastName: '' as string,
  age: 0 as number,
  phone: '' as string,
  email: '' as string,
  seat: '' as string,
  food: '' as string,
  allergies: '' as string,

  // actions
  updateFirstName: function(value: string) {
    this.firstName = value
  },
  updateLastName: function(value: string) {
    this.lastName = value
  },
  updateAge: function(value: number) {
    this.age = value
  },
  updatePhone: function(value: string) {
    this.phone = value
  },
  updateEmail: function(value: string) {
    this.email = value
  },
  updateSeat: function(value: string) {
    this.seat = value
  },
  updateFood: function(value: string) {
    this.food = value
  },
  updateAllergies: function(value: string) {
    this.allergies = value
  },
}