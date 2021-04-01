const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const icons = document.querySelectorAll('.nav-links icons');


new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    navigationPosition: 'left',

    onLeave: (org, des, direction) => {

        // des section
        const des_section = des.item;
        const des_title = des_section.querySelector('.title h1');
        const des_bars = des_section.querySelectorAll('.border span');
        const des_description = des_section.querySelector('.slide-in-left');

        if (des.index === 0) {

            new TimelineMax({delay: 0.5}).fromTo(des_title, 0.4, {x: -500}, {x: 0});
            des_bars.forEach(bar => {
                new TimelineMax({delay: 0.7}).fromTo(bar, 0.5, {x: -150}, {x: 0});
            });
            new TimelineMax({delay: 0.8}).fromTo(des_description, 0.6, {x: -200}, {x: 0});

            let imgs1 = des_section.querySelectorAll('.section-img-1');
            let imgs2 = des_section.querySelectorAll('.section-img-2');

            imgs1.forEach(des_img => {
                new TimelineMax({delay: 0.5}).fromTo(des_img, 1, {x: 200, opacity: 0}, {x: 0, opacity: 1});
            })

            imgs2.forEach(des_img => {
                new TimelineMax({delay: 0.3}).fromTo(des_img, 1, {x: 200, opacity: 0}, {x: 0, opacity: 1});
            })
        } else {
            new TimelineMax({delay: 0.5}).fromTo(des_title, 0.4, {x: -700}, {x: 0});
            des_bars.forEach(bar => {
                new TimelineMax({delay: 0.7}).fromTo(bar, 0.5, {x: -150}, {x: 0});
            });
            new TimelineMax({delay: 0.8}).fromTo(des_description, 0.6, {x: -600}, {x: 0});
        
            let fills = des_section.querySelectorAll('.fill');

            console.log(fills)
            fills.forEach(bar => {
                bar.classList.add('progress');
                console.log(bar.classList)
                
            })
        }

        if (org.index === 0) {

            const org_section = org.item;
            let imgs1 = org_section.querySelectorAll('.section-img-1');
            let imgs2 = org_section.querySelectorAll('.section-img-2');

            imgs1.forEach(orgImg => {
                new TimelineMax().fromTo(orgImg, 0.5, {x: 0, opacity: 1}, {x: 200, opacity: 0});
            })

            imgs2.forEach(orgImg => {
                new TimelineMax(0.2).fromTo(orgImg, 0.5, {x: 0, opacity: 1}, {x: 200, opacity: 0});
            })            
        } else {
            let fills = org.item.querySelectorAll('.fill');

            console.log(fills)
            fills.forEach(bar => {
                bar.classList.remove('progress');
                console.log(bar.classList)
            })
        }
    }
});

let isOpen = false;
hamburger.addEventListener("click", () => {
    isOpen = !isOpen;
    navLinks.classList.toggle("open");

    console.log(links)

    let tl = new TimelineMax();
    links.forEach(link => {
        if (isOpen) {
            tl.fromTo(link, 0.2, {y: "50", opacity: 0}, {y: 0, opacity: 1});
        } else {
            link.style.opacity = 0;
        }
    });
})

