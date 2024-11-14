import '../index.css'

import { Modal } from './ui/modal'
import { restoreButton } from './ui/restore-button'
import { loadFont } from './utils'

loadFont()

const button = restoreButton({ size: 14 }).mount(document.body)

button.show()


const modal = new Modal('suggestions', 'asd', 'Suggestions')

button.button.addEventListener('click', () => {
  modal.open()
  console.log('Button click')
})