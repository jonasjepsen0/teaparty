import { create } from '../utils/create.js'
import { get } from '../utils/get.js'
import { set } from '../utils/set.js'
import img1 from "../../images/Form-Base.jpg"

export function sect2h2() {
    const h2 = create("h2")
    h2.textContent = "About Us"
    h2.className = "font-customstylefont text-5xl text-custompurple my-2 mx-5"
    return h2
}

export function imggrid() {
    const grid = create("div")
    grid.className = "grid grid-cols-1 md:grid-cols-2 gap-2 mx-auto w-full"

    const pieces = [
        { x: '0%', y: '0%', h2: 'The Team', h3: 'Meet our dedicated team' },
        { x: '100%', y: '0%', h2: 'The Brand', h3: 'TeaParty brands and mixtures' },
        { x: '0%', y: '100%', h2: 'The Company', h3: 'Company information and Mission' },
        { x: '100%', y: '100%', h2: 'The Customers', h3: 'About the Sippers and Dippers' },
    ]

    pieces.forEach(({ x, y, h2: h2text, h3: h3text }) => {
        const a = create("a")
        const piece = create("div")
        const overlay = create("div")
        const h2 = create("h2")
        const h3 = create("h3")

        a.href = "#"
        piece.style.backgroundImage = img1
        piece.style.backgroundSize = "200% 200%"
        piece.style.backgroundPositionX = x
        piece.style.backgroundPositionY = y
        piece.classList.add(
            "relative",
            "w-full",
            "h-auto",
            "bg-no-repeat",
            "hover:scale-103",
            "transition-transform",
            "duration-300",
            "cursor-pointer",
            "aspect-video"
        )

        overlay.className = "absolute inset-0 flex flex-col justify-start p-4"
        h2.textContent = h2text
        h2.className = "font-customGoogleFont text-2xl text-lime-400"
        h3.textContent = h3text
        h3.className = "font-customGoogleFont text-lg text-customwhite"

        set(h2, overlay)
        set(h3, overlay)
        set(overlay, piece)
        set(piece, a)
        set(a, grid)
    })

    return grid
}