function choose(sender) {
    const inner = sender.querySelector(".tileX");

    if (inner.style.opacity === "0"){
        inner.style.opacity = "0.6";
    }
    else {
        inner.style.opacity = "0.0";
    }
}
