const tiles = document.querySelectorAll(".tile");

tiles.forEach(tile => {
    tile.addEventListener("pointerup", () => choose(tile));
});

function choose(sender) {
    const x = sender.querySelector(".tileX");
    if (x.style.opacity === "0" || x.style.opacity === "") {
        x.style.opacity = "0.2";
    } else {
        x.style.opacity = "0.0";
    }
}