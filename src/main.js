import { hero } from './components/hero.js'

const header = document.createElement('header');
header.append(hero());

document.body.append(header)