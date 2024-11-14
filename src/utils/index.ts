// function getOffsetLeft(elem: HTMLElement | null): number {
//   let offsetLeft = 0
//   while (elem) {
//     if (!isNaN(elem.offsetLeft)) {
//       offsetLeft += elem.offsetLeft
//     }

//     elem = elem.offsetParent as HTMLElement
//   }
//   return offsetLeft
// }

// function getOffsetTop(elem: HTMLElement | null): number {
//   let offsetTop = 0
//   while (elem) {
//     if (!isNaN(elem.offsetTop)) {
//       offsetTop += elem.offsetTop
//     }

//     elem = elem.offsetParent as HTMLElement
//   }
//   return offsetTop
// }

export function getBoundingRect(elem: HTMLElement | null): {
  x: number
  y: number
  width: number
  height: number
} {
  const rect = elem?.getBoundingClientRect()
  return {
    // x: getOffsetLeft(elem),
    // y: getOffsetTop(elem),
    x: rect?.left || 0 + document.body.scrollLeft,
    y: rect?.top || 0 + document.body.scrollTop,
    width: elem?.offsetWidth || 0,
    height: elem?.offsetHeight || 0,
  }
}

export const isCurrentHasParent = (current: HTMLElement, parent: HTMLElement | null): boolean => {
  if (!parent) return false
  
  let elem = current.parentNode
  do {
    if (elem === parent) return true

  } while (elem = elem?.parentNode as ParentNode)
    
  return false
}

export const isSupportedNode = (elem: HTMLElement): boolean => {
  if (!elem) return false

  switch(elem.tagName) {
    case 'INPUT':
      return isSupportedInputType(elem as HTMLInputElement)
    case 'TEXTAREA':
      return true
    default:
      return isEditableElem(elem)
  }
}

const isSupportedInputType = (elem: HTMLInputElement): boolean => {
  return ['text'].includes(elem.type)
}

const isEditableElem = (elem: HTMLElement): boolean => {
  return (
    ['textbox'].includes(elem?.role || '') ||
    elem.contentEditable === 'true'
  )
}

export const loadFont = () => {
  // <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
  const link = document.createElement('link')
  link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'
  link.rel = 'stylesheet'

  document.body.appendChild(link)
}