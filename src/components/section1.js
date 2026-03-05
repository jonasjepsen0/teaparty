import { create } from '../utils/create.js'
import { get } from '../utils/get.js'
import { set } from '../utils/set.js'

export function sect1() {
    const section = create('section')
    const figure = create("figure")
    const image = create("img")
    const h2 = create("h2")
    const p = create("p")

    image.src = "../images/kop.png";
    h2.textContent = "Passion and pride"
    h2.className = "font-customGoogleFont text-5xl text-center text-lime-400 my-5"
    p.textContent = "Working in the world Of tea are what drive our constant evolution, and what have allowed us to offer the framework Of service and care that this highly appreciated product with over 2,000 years Of history deserves. Since 1990 our knowledge and experience has been geared to the quality Of our products, which we treat with respect and meticulousness."
    p.className = "font-customGoogleFont text-center"
    figure.append(h2, p, image);
    section.append(figure);

    return section;
}