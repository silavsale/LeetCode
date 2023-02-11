const buttons = document.querySelectorAll("button")
const states = {}

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    let state = this.getAttribute("aria-pressed") === "true" ? "false" : "true"
    this.setAttribute("aria-pressed", state)
    console.log("state", state)
    states[this.id] = state
  })
})
