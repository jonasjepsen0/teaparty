import { create } from '../utils/create.js'
import { get } from '../utils/get.js'
import { set } from '../utils/set.js'
import img1 from "../../images/Brands-Green.jpg"
import img2 from "../../images/Brands-Black.jpg"
import img3 from "../../images/Brands-White.jpg"
import img4 from "../../images/Brands-Rooibos.jpg"
import img5 from "../../images/Brands-Herbal.jpg"
import img6 from "../../images/Brands-Organic.jpg"

export function sect3h2() {
    const h2 = create("h2")
    h2.textContent = "Our Brands"
    h2.className = "font-customstylefont text-5xl text-lime-400 my-6 mx-5"
    return h2
}

export function imggrid3() {
    const grid = create("div")
    grid.className = "grid grid-cols-2 gap-2 w-full"

    const images = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
    ]

    images.forEach((img) => {
        const image = create("img")
        image.src = img
        image.className = "w-full h-full object-cover aspect-square"
        grid.append(image)
    })

    return grid
}