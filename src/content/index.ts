document.addEventListener('input', handleInput)
document.addEventListener('focusin', handleFocus)

function handleFocus(event: Event) {
  const target = event.target as HTMLInputElement
  if (!target) return

  wrapEl(target)
  showSuggestion(target, getKey(target))
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

const getValueByKey = (key: string): string | null => {
  return localStorage.getItem(key)
}

const getKey = (el: HTMLInputElement | HTMLTextAreaElement) => {
  return el?.name || el.id || el.className
}

const showSuggestion = (el: HTMLElement, key: string) => {
  let datalist = document.getElementById('wrapper-suggestion')
  if (!datalist) {
    datalist = createSuggestion()
    document.body.appendChild(datalist)
  }
  const value = getValueByKey(key)
  console.log(datalist, value)
  if (!value) {
    datalist.style.display = 'none'
    datalist.innerHTML = ''
    return
  }
  console.log(el)
  datalist.style.display = 'block'
  datalist.innerHTML = value
}

const createSuggestion = () => {
  const el = document.createElement('div')
  el.id = 'wrapper-suggestion'
  return el
}

const wrapEl = (el: HTMLInputElement) => {
  const parent = el.parentNode as HTMLElement
  if (!parent) return
  if (parent.closest('.savx__input-wrapper')) return

  const wrapper = document.createElement('div')
  wrapper.classList.add('savx__input-wrapper')
  wrapper.style.cssText = window.getComputedStyle(parent, "").cssText

  parent.parentNode?.insertBefore(wrapper, parent)
  wrapper.appendChild(parent)
}

const copyStyles = (source: HTMLInputElement, target: HTMLElement) => {
  const styles = [...window.getComputedStyle(target)]
  
}