import '../../index.css'
import { restoreButton } from '../ui/restore-button'
import { getOffset } from '../utils'
// import { getOffset, isCurrentHasParent } from '../utils'

// let currentInput: HTMLElement | null = null
let mouse = {
  x: 0,
  y: 0
}

// document.addEventListener('click', handleClick)
document.addEventListener('focusin', handleFocusIn)
document.addEventListener('focusout', handleFocusOut)
document.addEventListener('input', handleInput)
document.addEventListener('mousemove', handleMousemove)

const Button = restoreButton({ size: 18 }).mount(document.body)

Button.button.addEventListener('click', () => {
  console.log('Button click')
})

function handleMousemove(event: MouseEvent) {
  mouse.x = event.pageX
  mouse.y = event.pageY
}

// function handleClick(event: Event) {
//   console.log('document click')
//   const target = event.target as HTMLElement

//   console.log(currentInput, target)

//   if (!target.closest('.savx-btn') && Button.isShown && !isCurrentHasParent(target, currentInput)) {
//     console.log('click outside')
//     Button.hide()
//   }
// }

function handleFocusIn(event: Event) {
  console.log('focusIn')
  const target = event.target as HTMLInputElement
  console.log(target)
  if (!target || target === Button.button) return

  // currentInput = target
  const boundingRect = getOffset(target)
  const rightOffset = 15
  
  Button.show({
    // x: Math.max(Math.min(mouse.x, boundingRect.x + boundingRect.width), boundingRect.x) + 15,
    x: boundingRect.x + boundingRect.width - (Button.size + rightOffset),
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
