export const step = {
  // state
  index: 1 as number,

  // actions
  doBackStep: function() {
    this.index -= 1
  },
  doNextStep: function() {
    this.index += 1
  },
  setStep: function(step: number) {
    this.index = step
  }
}