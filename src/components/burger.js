import { create } from '../utils/create.js'
import { get } from '../utils/get.js'
import { set } from '../utils/set.js'

export function burger(navlinks) {
  const btn = create('button')
  btn.innerText = '☰'
  btn.className = 'text-blue-200 text-2xl md:hidden'

  const menu = create('div')
  menu.className = 'flex-col gap-2 mt-2 hidden md:hidden'

  navlinks.forEach((link) => {
    const linkEl = create('a')
    linkEl.href = `#${link}`
    linkEl.innerText = link.toUpperCase()
    linkEl.className = 'text-blue-200'
    set(linkEl, menu)
  })

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden')
  })

  return { btn, menu }
}