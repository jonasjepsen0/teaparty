import { create } from '../utils/create.js'
import { get } from '../utils/get.js'
import { set } from '../utils/set.js'

export function hero() {
    const heroimg = create('img');
    const herotext = create("h1")
    const herodiv = create("div")

    heroimg.src = "../images/Image-Hero-Front.jpg";
    herotext.textContent = "helloworld"

    herodiv.append(heroimg, herotext);

    return herodiv;
}
