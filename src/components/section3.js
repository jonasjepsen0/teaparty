import { create } from '../utils/create.js'
import { get } from '../utils/get.js'
import { set } from '../utils/set.js'

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
        "../../images/Brands-Green.jpg",
        "../../images/Brands-Black.jpg",
        "../../images/Brands-White.jpg",
        "../../images/Brands-Rooibos.jpg",
        "../../images/Brands-Herbal.jpg",
        "../../images/Brands-Organic.jpg",
    ]

    images.forEach((img) => {
        const image = create("img")
        image.src = img
        image.className = "w-full h-full object-cover aspect-square"
        grid.append(image)
    })

    return grid
}