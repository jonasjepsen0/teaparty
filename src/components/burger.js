import { create } from '../utils/create.js'
import { get } from '../utils/get.js'
import { set } from '../utils/set.js'

export function burger(navlinks) {
  const btn = create('button')
  btn.innerText = '☰'
  btn.classList = 'text-blue-200 md:hidden'

  const menu = create('div')
  menu.classList = 'hidden flex-col'

  navlinks.forEach((link) => {
    const linkEl = create('a')
    linkEl.href = `#${link}`
    linkEl.innerText = link.toUpperCase()
    linkEl.classList = 'text-blue-200'
    set(linkEl, menu)
  })

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden')
    menu.classList.toggle('flex')
  })

  return { btn, menu }
}