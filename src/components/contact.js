import { create } from '../utils/create.js'
import { get } from '../utils/get.js'
import { set } from '../utils/set.js'

export function contactform() {
    const form = create("div")

    const fullname = create("input")
    fullname.type = "text"
    fullname.placeholder = "Full Name"
    fullname.id = "fullname"

    const emailinput = create("input")
    emailinput.type = "email"
    emailinput.placeholder = "Email"
    emailinput.id = "emailinput"

    const tlfnum = create("input")
    tlfnum.type = "tel"
    tlfnum.placeholder = "Phone Number"
    tlfnum.id = "phoneinput"

    const mailCheck = create("input")
    mailCheck.type = "checkbox"
    mailCheck.id = "mailcheck"

    const callCheck = create("input")
    callCheck.type = "checkbox"
    callCheck.id = "callcheck"

    const btn = create("button")
    btn.textContent = "SEND"
    btn.id = "sendbtn"

    set(fullname, form)
    set(emailinput, form)
    set(tlfnum, form)
    set(mailCheck, form)
    set(callCheck, form)
    set(btn, form)

    return form
}