import { create } from '../utils/create.js'
import { get } from '../utils/get.js'
import { set } from '../utils/set.js'
import { burger } from './burger.js'

export function navbar() {
  const nav = create('nav')
  nav.className = 'flex justify-end px-1 py-0 bg-custompurple'

  const navlinks = ['about us', 'brands', 'how to', 'join us']

  navlinks.forEach((link) => {
    const linkEl = create('a')
    linkEl.href = `#${link}`
    linkEl.innerText = link.toUpperCase()
    linkEl.className = 'text-blue-200 hidden md:inline'
    set(linkEl, nav)
  })

  const { wrapper } = burger(navlinks)
  set(wrapper, nav)

  return nav
}