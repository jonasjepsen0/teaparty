import { create } from '../utils/create.js'
import { get } from '../utils/get.js'
import { set } from '../utils/set.js'

export function hero() {
    const heroimg = create('img');
    const herotext = create("h1")
    const herofig = create("figure")

    heroimg.src = "../images/Image-Hero-Front.jpg";
    herotext.textContent = "helloworld"

    herofig.append(heroimg, herotext);

    return herofig;
}
