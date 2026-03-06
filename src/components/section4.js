import { create } from '../utils/create.js'
import { get } from '../utils/get.js'
import { set } from '../utils/set.js'

export function sect4h2() {
    const h2 = create("h2")
    h2.textContent = "How to prepare tea"
    h2.className = "font-customstylefont text-5xl text-custompurple my-6 mx-5"
    return h2
}

const items = [
    { img: '../../images/Brands-Green.jpg', h3: 'Green Tea', p1: 'Choose your brand and learn how to prepare. Fresh and vegetal, green teas are plucked, withered and rolled. Heat is applied to stop oxidation.', p2: 'Water Temperature: 80C / 180°F', p3: 'Brewing Time: 2 - 3 min.' },
    { img: '../../images/Brands-Black.jpg', h3: 'Black Tea', p1: 'Choose your brand and learn how to prepare. Fresh and vegetal, green teas are plucked, withered and rolled. Heat is applied to stop oxidation.', p2: 'Water Temperature: 80C / 180°F', p3: 'Brewing Time: 2 - 3 min.' },
    { img: '../../images/Brands-White.jpg', h3: 'White Tea', p1: 'Choose your brand and learn how to prepare. Fresh and vegetal, green teas are plucked, withered and rolled. Heat is applied to stop oxidation.', p2: 'Water Temperature: 80C / 180°F', p3: 'Brewing Time: 2 - 3 min.' },
    { img: '../../images/Brands-Rooibos.jpg', h3: 'Rooibos Tea', p1: 'Choose your brand and learn how to prepare. Fresh and vegetal, green teas are plucked, withered and rolled. Heat is applied to stop oxidation.', p2: 'Water Temperature: 80C / 180°F', p3: 'Brewing Time: 2 - 3 min.' },
    { img: '../../images/Brands-Herbal.jpg', h3: 'Herbal Tea', p1: 'Choose your brand and learn how to prepare. Fresh and vegetal, green teas are plucked, withered and rolled. Heat is applied to stop oxidation.', p2: 'Water Temperature: 80C / 180°F', p3: 'Brewing Time: 2 - 3 min.' },
    { img: '../../images/Brands-Organic.jpg', h3: 'Organic Tea', p1: 'Choose your brand and learn how to prepare. Fresh and vegetal, green teas are plucked, withered and rolled. Heat is applied to stop oxidation.', p2: 'Water Temperature: 80C / 180°F', p3: 'Brewing Time: 2 - 3 min.' },
]

export function sect4() {
    const section = create("section")

    const h3 = create("h3")
    h3.textContent = "Make a nice cup of tea"

    const h4 = create("h4")
    h4.textContent = "Choose your brand and learn how to prepare."

    const select = create("select")
    items.forEach((item, i) => {
        const option = create("option")
        option.value = i
        option.textContent = item.h3
        set(option, select)
    })

    const img = create("img")
    const itemh3 = create("h3")
    const p1 = create("p")
    const p2 = create("p")
    const p3 = create("p")

    const update = (i) => {
        img.src = items[i].img
        itemh3.textContent = items[i].h3
        p1.textContent = items[i].p1
        p2.textContent = items[i].p2
        p3.textContent = items[i].p3
    }

    select.addEventListener("change", (e) => update(e.target.value))
    update(0)

    set(h3, section)
    set(h4, section)
    set(select, section)
    set(img, section)
    set(itemh3, section)
    set(p1, section)
    set(p2, section)
    set(p3, section)

    return section
}