import '../../index.css'
import { restoreButton } from '../ui/restore-button'
import { getBoundingRect, isSupportedNode, loadFont } from '../utils'
import { Modal } from '../ui/modal'
import { suggestionsTemplate } from '../index'

loadFont()

const modal = new Modal('suggestions', 'Suggestions')

document.addEventListener('focusin', handleFocusIn)
document.addEventListener('focusout', handleFocusOut)
document.addEventListener('input', handleInput)

const Button = restoreButton({ size: 18 }).mount(document.body)

Button.button.addEventListener('click', () => {
  modal.setContent(suggestionsTemplate())
  modal.open()
  console.log('Button click')
})

function handleFocusIn(event: Event) {
  const target = event.target as HTMLInputElement
  console.log('focusIn', target)
  if (!isSupportedNode(target) || (!target || target === Button.button)) return

  const boundingRect = getBoundingRect(target)
  const offset = 15
  Button.show({
    // x: Math.max(Math.min(mouse.x, boundingRect.x + boundingRect.width), boundingRect.x) + 15,
    x: boundingRect.x + boundingRect.width - (Button.size + offset),
    y: boundingRect.y + (boundingRect.height - Button.size) / 2
  })
}

function handleFocusOut() {
  console.log('focusOut')

  if (Button.isShown) {
    Button.hide()
  }
}

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement | HTMLTextAreaElement
  if (!target) return
  saveValueForInput(target, target.value)
}

const saveValueForInput = (input: HTMLInputElement | HTMLTextAreaElement, value: string) => {
  const key = getKey(input)
  localStorage.setItem(key, value)
}

// const getValueByKey = (key: string): string | null => {
//   return localStorage.getItem(key)
// }

const getKey = (el: HTMLInputElement | HTMLTextAreaElement) => {
  return el?.name || el.id || el.className
}
