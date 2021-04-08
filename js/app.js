const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const icons = document.querySelectorAll('.nav-links icons');

let isOpen = false;
hamburger.addEventListener("click", () => {
    isOpen = !isOpen;
    navLinks.classList.toggle("open");

    console.log(links)

    let tl = new TimelineMax();
    links.forEach(link => {
        if (isOpen) {
            tl.fromTo(link, 0.2, { y: "50", opacity: 0 }, { y: 0, opacity: 1 });
        } else {
            link.style.opacity = 0;
        }
    });
})

var scrollTrigger = 100; // px
backToTop = function() {
    console.log("hello");
    var scrollTop = $(window).scrollTop();
    if (scrollTop > scrollTrigger) {
        $('#scroll-to-top').addClass('show');
    } else {
        $('#scroll-to-top').removeClass('show');
    }
};
backToTop();
$(window).on('scroll', function() {
    backToTop();
});