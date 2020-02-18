const parallaxImages = document.querySelectorAll(".parallax__image");

document.querySelector(".parallax__noscript--image").style.display = "none";
document.querySelector(".last").style.display = "block";

parallaxImages.forEach((image) => {
    image.style.display = "block"
})

window.addEventListener("scroll", () => {
    parallaxImages.forEach((image, index) => {
        image.style.transform = 'translateY(-' + window.scrollY * (index + 1) / 10 + 'px)';
    })
})