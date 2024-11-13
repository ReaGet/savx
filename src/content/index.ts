import '../../index.css'
import { restoreButton } from '../ui/restore-button'
import { getOffset } from '../utils'

let currentInput: HTMLElement | null = null
let mouse = {
  x: 0,
  y: 0
}

document.addEventListener('input', handleInput)
document.addEventListener('focusin', handleFocus)
document.addEventListener('click', handleClick)
document.addEventListener('mousemove', handleMousemove)

const Button = restoreButton({ size: 18 }).mount(document.body)

Button.button.addEventListener('click', () => {
  console.log('click')
})

function handleMousemove(event: MouseEvent) {
  mouse.x = event.pageX
  mouse.y = event.pageY
}

function handleClick(event: Event) {
  const target = event.target as HTMLElement

  console.log(currentInput, target)

  if (!target.closest('.savx-btn')) {
    // Button.hide()
  }
}

function handleFocus(event: Event) {
  const target = event.target as HTMLInputElement
  if (!target) return

  currentInput = target
  setTimeout(() => {
    const boundingRect = getOffset(target)
    console.log(boundingRect, Button.size)
    
    Button.show({
      x: Math.max(Math.min(mouse.x, boundingRect.x + boundingRect.width), boundingRect.x) + 15,
      y: boundingRect.y + (boundingRect.height - Button.size) / 2
    })
  }, 10)
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