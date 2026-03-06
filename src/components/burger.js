import { create } from '../utils/create.js'
import { get } from '../utils/get.js'
import { set } from '../utils/set.js'

export function burger(navlinks) {
  const wrapper = create('div')
  wrapper.className = 'flex flex-col items-end md:hidden w-full'

  const btn = create('button')
  btn.innerText = '☰'
  btn.className = 'text-lime-300 text-2xl'

  const menu = create('div')
  menu.className = 'flex-col gap-2 p-4 hidden w-full items-center'

  navlinks.forEach((link) => {
    const linkEl = create('a')
    linkEl.href = `#${link}`
    linkEl.innerText = link.toUpperCase()
    linkEl.className = 'text-lime-300 block text-center'
    set(linkEl, menu)
  })

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden')
    menu.classList.toggle('flex')
  })

  set(btn, wrapper)
  set(menu, wrapper)

  return { wrapper }
}