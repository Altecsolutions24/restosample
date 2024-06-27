function scrollLeft() {
    document.getElementById('carousel-images').scrollBy({
        top: 0,
        left: -100,
        behavior: 'smooth'
    });
}

function scrollRight() {
    document.getElementById('carousel-images').scrollBy({
        top: 0,
        left: 100,
        behavior: 'smooth'
    });
}
