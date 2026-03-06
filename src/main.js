import { create } from './utils/create.js'
import { get } from './utils/get.js'
import { set } from './utils/set.js'
import { header } from './components/header.js'
import { sect1 } from './components/section1.js'
import { imggrid } from './components/section2.js'
import { sect2h2 } from './components/section2.js'
import { sect3h2 } from './components/section3.js'
import { imggrid3 } from './components/section3.js'
import { sect4h2 } from './components/section4.js'
import { sect4 } from './components/section4.js'

set(header(), document.body)
set(sect1(), document.body)
set(sect2h2(), document.body)
set(imggrid(), document.body)
set(sect3h2(), document.body)
set(imggrid3(), document.body)
set(sect4h2(), document.body)
set(sect4(), document.body)