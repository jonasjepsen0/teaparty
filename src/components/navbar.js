import { create } from '../utils/create.js'
import { get } from '../utils/get.js'
import { set } from '../utils/set.js'

export function navbar() {
    const nav = create("nav")
    const navlinks = ['about us', 'brands', 'how to', 'join us']
    
    navlinks.forEach((link) => {
    const linkEl = create('a')
    linkEl.href = `#${link}`
    linkEl.innerText = link.toUpperCase()
    linkEl.classList = 'text-blue-200'
    set(linkEl, nav)
  })
  return nav
}