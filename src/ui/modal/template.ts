import './index.css'

type ModalProps = {
  name: string
  content: string
}

export const modalTemplate = ({ name, content }: ModalProps) => (`
  <div class="modal" data-modal-target="${name}">
    <div class="modal-overlay" data-modal-overlay="${name}" data-action="close">
      <div class="modal-inner">
        <button data-modal-close="${name}" aria-label="close" class="modal-close-btn" type="button" data-action="close">
          <svg style="stroke: currentColor" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.33398 3.33496L15.9993 16.0003M15.9993 16.0003L28.6647 28.6657M15.9993 16.0003L3.33398 28.6657M15.9993 16.0003L28.6647 3.33496" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <div data-modal-content>
          ${content}
        </div>
      </div>
    </div>
  </div>
`)
