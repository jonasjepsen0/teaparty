import { create } from '../utils/create.js'
import { get } from '../utils/get.js'
import { set } from '../utils/set.js'
import { hero } from './hero.js'
import { navbar } from './navbar.js'

export function header() {
  const header = create('header')

  const nav = navbar()
  const herofig = hero()

  set([herofig, nav], header)

  return header
}
