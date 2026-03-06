import { create } from '../utils/create.js'
import { get } from '../utils/get.js'
import { set } from '../utils/set.js'
import img1 from "../../images/Brands-Green.jpg"

export function sect4h2() {
    const h2 = create("h2")
    h2.textContent = "How to prepare tea"
    h2.className = "font-customstylefont text-5xl text-custompurple my-6 mx-5"
    return h2
}

const items = [
    { img: img1, h3: 'Green Tea', p1: 'Choose your brand and learn how to prepare. Fresh and vegetal, green teas are plucked, withered and rolled. Heat is applied to stop oxidation.', p2: 'Water Temperature: 80C / 180°F', p3: 'Brewing Time: 2 - 3 min.' },
    { img: '../../images/Brands-Black.jpg', h3: 'Black Tea', p1: 'Choose your brand and learn how to prepare. Fresh and vegetal, green teas are plucked, withered and rolled. Heat is applied to stop oxidation.', p2: 'Water Temperature: 80C / 180°F', p3: 'Brewing Time: 2 - 3 min.' },
    { img: '../../images/Brands-White.jpg', h3: 'White Tea', p1: 'Choose your brand and learn how to prepare. Fresh and vegetal, green teas are plucked, withered and rolled. Heat is applied to stop oxidation.', p2: 'Water Temperature: 80C / 180°F', p3: 'Brewing Time: 2 - 3 min.' },
    { img: '../../images/Brands-Rooibos.jpg', h3: 'Rooibos Tea', p1: 'Choose your brand and learn how to prepare. Fresh and vegetal, green teas are plucked, withered and rolled. Heat is applied to stop oxidation.', p2: 'Water Temperature: 80C / 180°F', p3: 'Brewing Time: 2 - 3 min.' },
    { img: '../../images/Brands-Herbal.jpg', h3: 'Herbal Tea', p1: 'Choose your brand and learn how to prepare. Fresh and vegetal, green teas are plucked, withered and rolled. Heat is applied to stop oxidation.', p2: 'Water Temperature: 80C / 180°F', p3: 'Brewing Time: 2 - 3 min.' },
    { img: '../../images/Brands-Organic.jpg', h3: 'Organic Tea', p1: 'Choose your brand and learn how to prepare. Fresh and vegetal, green teas are plucked, withered and rolled. Heat is applied to stop oxidation.', p2: 'Water Temperature: 80C / 180°F', p3: 'Brewing Time: 2 - 3 min.' },
]

export function sect4() {
    const section = create("section")
    const header = create("div")
    const content = create("div")

    section.className = ""
    header.className = "h-28"
    content.className = "bg-orange-300"

    const h3 = create("h3")
    h3.textContent = "Make a nice cup of tea"
    h3.className = "font-customGoogleFont text-2xl text-orange-300 mx-1"

    const h4 = create("h4")
    h4.textContent = "Choose your brand and learn how to prepare."
    h4.className = "font-customGoogleFont text-orange-300 mx-1"

    const select = create("select")
    items.forEach((item, i) => {
        const option = create("option")
        option.value = i
        option.textContent = item.h3

        select.className = "w-11/12 h-1/2 border-2 text-orange-300 bg-orange-200 text-2xl mx-1"

        set(option, select)
    })

    const img = create("img")
    const itemh3 = create("h3")
    const p1 = create("p")
    const p2 = create("p")
    const p3 = create("p")

    img.className = "w-full my-4"
    itemh3.className = "text-custompurple text-5xl font-customGoogleFont"
    p1.className = "text-custompurple font-customGoogleFont"
    p2.className = "font-customGoogleFont text-customwhite"
    p3.className = "font-customGoogleFont text-customwhite"

    const update = (i) => {
        img.src = items[i].img
        itemh3.textContent = items[i].h3
        p1.textContent = items[i].p1
        p2.textContent = items[i].p2
        p3.textContent = items[i].p3
    }

    select.addEventListener("change", (e) => update(e.target.value))
    update(0)

    set(h3, header)
set(h4, header)
set(select, header)
set(img, content)
set(itemh3, content)
set(p1, content)
set(p2, content)
set(p3, content)
set(header, section)
set(content, section)

    return section
}