import './index.css'

type Props = {
  size?: number
}

type Position = {
  x: number
  y: number
}

type RestoreButton = {
  readonly size: number
  readonly isShown: boolean
  readonly button: HTMLButtonElement
  mount: (parent: HTMLElement) => RestoreButton
  show: (pos?: Position) => void
  hide: () => void
}

export const restoreButton = (props?: Props): RestoreButton => {
  const div = document.createElement("div")
  div.innerHTML = template(props || {})
  let isShown = false
  const button = div.firstElementChild as HTMLButtonElement

  const buttonInstance: RestoreButton = {
    get size() {
      return button.offsetHeight
    },
    get isShown() {
      return isShown
    },
    get button() {
      return button
    },
    mount(parent: HTMLElement) {
      parent.appendChild(this.button)
      return buttonInstance
    },
    show(pos?: Position) {
      setTimeout(() => {
        this.button.classList.add('js-active')
        const { x = 0, y = 0 } = pos || {}
        this.button.style.left = `${x}px`
        this.button.style.top = `${y}px`
        isShown = true
      }, 100)
    },
    hide() {
      setTimeout(() => {
        this.button.classList.remove('js-active')
        isShown = false
      }, 100)
    }
  }

  return buttonInstance
}

const template = ({ size = 18 }: Props) => (`
  <button type="button" class="savx-btn" style="top: 0; left: 0;">
    <svg style="stroke: current;" width="${size}" height="${size}" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.23696 12.24C5.27375 13.7612 7.02023 14.76 8.99999 14.76C12.1812 14.76 14.76 12.1812 14.76 8.99999C14.76 5.81883 12.1812 3.23999 8.99999 3.23999C5.81883 3.23999 3.23999 5.81883 3.23999 8.99999V9.71999M8.99999 5.75999V8.99999L11.16 11.16" stroke-width="1.5"/>
      <path d="M5.03994 7.92001L3.23994 9.72001L1.43994 7.92001" stroke-width="1.5"/>
    </svg>
  </button>
`)