import { create } from '../utils/create.js'
import { get } from '../utils/get.js'
import { set } from '../utils/set.js'
import { contactform } from './contact.js'

export function footer() {
    const footer = create("footer")
    footer.className = "bg-custompurple p-4"

    const h2 = create("h2")
    h2.textContent = "Contact Us"
    h2.className = "font-customstylefont text-5xl text-lime-300"

    const address = create("p")
    address.textContent = "Styrsögatan 4, 211 24 Malmö, Sweden"
    address.className = "font-customGoogleFont"

    const number = create("p")
    number.textContent = "+46 (0) 761688994"
    number.className = "font-customGoogleFont"

    const email = create("p")
    email.textContent = "sales@teministeriet.com"
    email.className = "font-customGoogleFont"

    const linkcol = create("div")
    linkcol.className = "flex flex-col gap-4"

    const navlinks = ['Information', 'About Us', 'Our Blog', 'Terms & Conditions', 'Privacy Policy', 'Contact Us']
    navlinks.forEach((link) => {
        const a = create("a")
        a.href = "#"
        a.textContent = link
        a.className = "font-customGoogleFont"
        set(a, linkcol)
    })

    set(h2, footer)
    set(address, footer)
    set(number, footer)
    set(email, footer)
    set(linkcol, footer)
    set(contactform(), footer)

    return footer
}