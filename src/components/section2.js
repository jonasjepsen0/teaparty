import { create } from '../utils/create.js'
import { get } from '../utils/get.js'
import { set } from '../utils/set.js'

export function imggrid() {
    const grid = create("div");

    grid.classList.add("grid", "grid-cols-1", "md:grid-cols-2", "gap-2", "mx-auto", "w-full");

    const pieces = [
        { x: '0%', y: '0%' },
        { x: '100%', y: '0%' },
        { x: '0%', y: '100%' },
        { x: '100%', y: '100%' },
    ];

    pieces.forEach(({ x, y }) => {
        const a = create("a");
        const piece = create("div");

        a.href = "#";
        piece.style.backgroundImage = `url("../../images/Form-Base.jpg")`;
        piece.style.backgroundSize = "200% 200%";
        piece.backgroundPosition = `${x} ${y}`;
        
        piece.style.backgroundPositionX = x;
        piece.style.backgroundPositionY = y;
        piece.classList.add(
            "w-full",
            "h-auto",
            "bg-no-repeat",
            "hover:scale-103",
            "transition-transform",
            "duration-300",
            "cursor-pointer",
            "aspect-16/9",
        );
        a.append(piece);
        grid.append(a);
    }
);
return grid
}