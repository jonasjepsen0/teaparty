import { create } from '../utils/create.js'
import { get } from '../utils/get.js'
import { set } from '../utils/set.js'
import img1 from "../../images/Image-Hero-Front.jpg"

export function hero() {
    const heroimg = create('img');
    const herotext = create("h1")
    const herofig = create("figure")

    heroimg.src = img1;
    herotext.textContent = "TeaParty"

    herotext.className = "font-customstylefont text-7xl absolute top-1.5 left-17 text-customwhite"
    
    herofig.append(heroimg, herotext);

    return herofig;
}
