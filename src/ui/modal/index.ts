import { modalTemplate } from "./template"

interface IModal {
  el: HTMLElement | null
  name: string
  content: string
  open: () => void
  close: () => void
  setContent: (content: string) => void
  readonly closeButton: HTMLElement | undefined
  readonly overlay: HTMLElement | undefined
}

export class Modal implements IModal {
  el: HTMLElement | null = null
  name: string = ''
  content: string = ''
  constructor(name: string, content: string) {
    this.name = name
    this.content = content
    this.init()
  }

  private init() {
    this.mount()
    this.bindEvents()
  }

  private mount() {
    const div = document.createElement('div')
    div.innerHTML = modalTemplate({
      name: this.name,
      content: this.content
    })

    this.el = div.firstElementChild as HTMLElement

    document.body.appendChild(this.el)
  }

  private bindEvents() {
    this.closeButton.addEventListener('click', () => this.close())
    this.overlay.addEventListener('click', (event: Event) => {
      const target = event.target as HTMLElement
      if (target.closest('.modal-inner')) return
      this.close()
    })

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') this.close()
    })
  }

  open() {
    this.el?.classList.add('js-active')
  }

  close() {
    this.el?.classList.remove('js-active')
  }

  setContent(content: string) {
    console.log(content)
  }

  get closeButton() {
    return this.el?.querySelector('[data-modal-close]') as HTMLElement
  }

  get overlay() {
    return this.el?.querySelector('[data-modal-overlay]') as HTMLElement
  }
}