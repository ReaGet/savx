import { modalTemplate } from "./template"

interface IModal {
  el: HTMLElement | null
  name: string
  content: string
  title: string
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
  title: string = ''
  constructor(name: string, title: string) {
    this.name = name
    this.title = title
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
      content: this.content,
      title: this.title
    })

    this.el = div.firstElementChild as HTMLElement

    document.body.appendChild(this.el)
  }

  private bindEvents() {
    let clickedEl: HTMLElement | null = null
    this.closeButton.addEventListener('click', () => this.close())
    document.addEventListener('mousedown', (event: Event) => {
      if (event.target === this.overlay) this.close()
    })

    document.addEventListener('mouseup', (event: Event) => {
      if (event.target  === clickedEl && clickedEl === event.currentTarget) {
        this.close()
      }
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
    const contentEl = this.el?.querySelector('[data-modal-content]')
    if (!contentEl) return

    contentEl.innerHTML = content
  }

  get closeButton() {
    return this.el?.querySelector('[data-modal-close]') as HTMLElement
  }

  get overlay() {
    return this.el?.querySelector('[data-modal-overlay]') as HTMLElement
  }
}