import { create } from '../utils/create.js'
import { get } from '../utils/get.js'
import { set } from '../utils/set.js'


export function contactform() {
    const form = create("div")
    form.className = "flex flex-col gap-2"

    const fullname = create("input")
    fullname.type = "text"
    fullname.placeholder = "Full Name"
    fullname.id = "fullname"
    fullname.className = "bg-orange-200 p-2 text-orange-400"

    const emailinput = create("input")
    emailinput.type = "email"
    emailinput.placeholder = "Email"
    emailinput.id = "emailinput"
    emailinput.className = "bg-orange-200 p-2 text-orange-400"

    const tlfnum = create("input")
    tlfnum.type = "tel"
    tlfnum.placeholder = "Phone Number"
    tlfnum.id = "phoneinput"
    tlfnum.className = "bg-orange-200 p-2 text-orange-400"

    const mailCheck = create("input")
    mailCheck.type = "checkbox"
    mailCheck.id = "mailcheck"

    const mailLabel = create("label")
    mailLabel.className = "flex items-center gap-2 text-orange-200 text-2xl"
    const mailSpan = create("span")
    mailSpan.textContent = "Mail me"
    set(mailCheck, mailLabel)
    set(mailSpan, mailLabel)

    const callCheck = create("input")
    callCheck.type = "checkbox"
    callCheck.id = "callcheck"

    const callLabel = create("label")
    callLabel.className = "flex items-center gap-2 text-orange-200 text-2xl"
    const callSpan = create("span")
    callSpan.textContent = "Call me"
    set(callCheck, callLabel)
    set(callSpan, callLabel)

    const checkrow = create("div")
    checkrow.className = "flex gap-20"
    set(mailLabel, checkrow)
    set(callLabel, checkrow)

    const btn = create("button")
    btn.textContent = "SEND"
    btn.id = "sendbtn"
    btn.className = "bg-orange-200 p-2 text-orange-400"

    set(fullname, form)
    set(emailinput, form)
    set(tlfnum, form)
    set(checkrow, form)
    set(btn, form)

    return form
}