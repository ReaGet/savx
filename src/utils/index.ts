function getOffsetLeft(elem: HTMLElement | null): number {
  let offsetLeft = 0
  while (elem) {
    if (!isNaN(elem.offsetLeft)) {
      offsetLeft += elem.offsetLeft
    }

    elem = elem.offsetParent as HTMLElement
  }
  return offsetLeft
}

function getOffsetTop(elem: HTMLElement | null): number {
  let offsetTop = 0
  while (elem) {
    if (!isNaN(elem.offsetTop)) {
      offsetTop += elem.offsetTop
    }

    elem = elem.offsetParent as HTMLElement
  }
  return offsetTop
}

export function getOffset(elem: HTMLElement | null): {
  x: number
  y: number
  width: number
  height: number
} {
  return {
    x: getOffsetLeft(elem),
    y: getOffsetTop(elem),
    width: elem?.offsetWidth || 0,
    height: elem?.offsetHeight || 0,
  }
}