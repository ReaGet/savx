import { formatDate } from "../utils"

export type Suggestion = {
  text: string
  timestamp: string
  id: string
}

export const generateTemplate = (data: Suggestion[]) => (`
  <div class="pr-[5px]">
    <ul class="flex flex-col w-full gap-4 -mr-[5px]">
      ${data.map(suggestionItem).join('\n')}
    </ul>  
  </div>
`)

const suggestionItem = (data: Suggestion) => (`
  <li class="flex w-full">
    <div class="flex-1">
      <div class="text-[16px] text-[#212121] leading-[19px] line-clamp-2">${data.text}</div>
      <div class="text-[14px] text-[#B8B8B8]">${formatDate(data.timestamp)}</div>
    </div>
    <button class="flex items-center justify-center shrink-0 w-[32px] h-[32px] cursor-pointer rounded-[5px] hover:bg-[#f0f0f0] transition-all" data-action="savx-copy">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0001 5.33331C14.0001 4.22875 13.1047 3.33331 12.0001 3.33331H6.66675C5.56218 3.33331 4.66675 4.22875 4.66675 5.33331V13.3333C4.66675 14.4379 5.56218 15.3333 6.66675 15.3333H12.0001C13.1047 15.3333 14.0001 14.4379 14.0001 13.3333V5.33331ZM12.6667 5.33331C12.6667 4.96513 12.3683 4.66665 12.0001 4.66665H6.66675C6.29856 4.66665 6.00008 4.96513 6.00008 5.33331V13.3333C6.00008 13.7015 6.29856 14 6.66675 14H12.0001C12.3683 14 12.6667 13.7015 12.6667 13.3333V5.33331Z" fill="#8B8A8A"/>
        <path d="M4 2.00002H10.6667C11.0349 2.00002 11.3333 1.70154 11.3333 1.33335C11.3333 0.965167 11.0349 0.666687 10.6667 0.666687H4C2.89543 0.666687 2 1.56212 2 2.66669V12C2 12.3682 2.29848 12.6667 2.66667 12.6667C3.03485 12.6667 3.33333 12.3682 3.33333 12V2.66669C3.33333 2.2985 3.63181 2.00002 4 2.00002Z" fill="#8B8A8A"/>
      </svg>
    </button>
  </li>  
`)