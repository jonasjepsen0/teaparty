import { create } from '../utils/create.js'
import { get } from '../utils/get.js'
import { set } from '../utils/set.js'
import { burger } from './burger.js'

export function navbar() {
    const nav = create("nav")
    nav.className = 'flex justify-end p-4'
    
    const navlinks = ['about us', 'brands', 'how to', 'join us']
    
    navlinks.forEach((link) => {
    const linkEl = create('a')
    linkEl.href = `#${link}`
    linkEl.innerText = link.toUpperCase()
    linkEl.classList = 'text-blue-200 hidden md:inline'
    set(linkEl, nav)
  })

const { btn, menu } = burger(navlinks)
set(btn, nav)
set(menu, nav)

  return nav
}