const container = document.querySelector('.section');

const v1 = document.querySelectorAll('.v1');
const v2 = document.querySelectorAll('.v2');
const v3 = document.querySelectorAll('.v3');
const v4 = document.querySelectorAll('.v4');

// Moving Animation Event
container.addEventListener('mousemove', e => {
    let x1 = ((window.innerWidth / 2 - e.pageX) / 200);
    let y1 = ((window.innerWidth / 2 - e.pageY) / 200);
    // card.style.transform = `rotateY(${x1}deg) rotateX(${y1}deg)`;
    // crew.style.transform = `rotateY(${x1}deg) rotateX(${y1}deg)`;

    let x2 = x1*3;
    let y2 = y1*3;
    let x3 = x1*5;
    let y3 = y1*5;
    let x4 = x1*8;
    let y4 = y1*8;

    v1.forEach(v => {
        v.style.transform = `translate3d(${x1}px, ${y1}px, 0px)`;
    })

    v2.forEach(v => {
        v.style.transform = `translate3d(${x2}px, ${y2}px, 0px)`;
    })

    v3.forEach(v => {
        v.style.transform = `translate3d(${x3}px, ${y3}px, 0px)`;
    })

    v4.forEach(v => {
        v.style.transform = `translate3d(${x4}px, ${y4}px, 0px)`;
    })
})

// // Animate In
// container.addEventListener('mouseenter', e => {
//     card.style.transition = 'none';
//     crew.style.transition = 'none';

//     moonlight.style.transform = "translateZ(50px)";
//     crewLayer.style.transform = "translateZ(100px)";
// })

// // Animate Out
// container.addEventListener('mouseleave', e => {
//     card.style.transition = 'all 0.5s ease';
//     card.style.transform = `rotateY(0deg) rotateX(0deg) `;
//     crew.style.transition = 'all 0.5s ease';
//     crew.style.transform = `rotateY(0deg) rotateX(0deg) `;

//     moonlight.style.transform = "translateZ(0px)";
//     crewLayer.style.transform = "transtaleZ(0px)";
// })