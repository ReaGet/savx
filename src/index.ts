import { restoreButton } from "./ui/restore-button"

const button = restoreButton({ size: 14 })

button.mount(document.body)

setTimeout(() => {
  button.show()
}, 1500)