import '../index.css'

// import { Modal } from './ui/modal'
// import { restoreButton } from './ui/restore-button'
import { generateTemplate, Suggestion } from './ui/suggestion'
// import { loadFont } from './utils'

// loadFont()

// const button = restoreButton({ size: 14 }).mount(document.body)

// button.show()

const suggestionsData: Suggestion[] = [
  { id: '123', text: `Intl.DateTimeFormat is a powerful tool for formatting dates and times in JavaScript applications. It allows you to create user-friendly and localized date displays while customizing the format to meet your specific needs. Whether you're building a simple date picker or a complex scheduling application, mastering Intl.DateTimeFormat will help you provide a better user experience and make your code more maintainable.`, timestamp: new Date().toString()},
  { id: '123', text: `make your code more maintainable.`, timestamp: new Date().toString()},
  { id: '123', text: `make your code more maintainable.`, timestamp: new Date().toString()},
  { id: '123', text: `make your code more maintainable.`, timestamp: new Date().toString()},
  { id: '123', text: `make your code more maintainable.`, timestamp: new Date().toString()},
  { id: '123', text: `Intl.DateTimeFormat is a powerful tool for formatting dates and times in JavaScript applications. It allows you to create user-friendly and localized date displays while customizing the format to meet your specific needs. Whether you're building a simple date picker or a complex scheduling application, mastering Intl.DateTimeFormat will help you provide a better user experience and make your code more maintainable.`, timestamp: new Date().toString()},
  { id: '123', text: `make your code more maintainable.`, timestamp: new Date().toString()},
]

export const suggestionsTemplate = () => (`
  <div class="min-w-[500px] max-w-[500px]">
    ${generateTemplate(suggestionsData)}
  </div>
`)

// const modal = new Modal('suggestions', 'Suggestions')
// modal.setContent(suggestionsTemplate())

// button.button.addEventListener('click', () => {
//   modal.open()
//   console.log('Button click')
// })