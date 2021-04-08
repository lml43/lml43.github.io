new fullpage('#fullpage', {
    autoScrolling: true,
    anchors: ['section1', 'section2', 'section3', 'section4'],
    navigation: true,
    navigationPosition: 'left',

    onLeave: (org, des, direction) => {

        // des section
        const des_section = des.item;
        const des_title = des_section.querySelector('.title h1');
        const des_bars = des_section.querySelectorAll('.border-line span');
        const des_description = des_section.querySelector('.slide-in-left');

        if (des.index === 0) {
            let imgs1 = des_section.querySelectorAll('.section-img-1');
            let imgs2 = des_section.querySelectorAll('.section-img-2');
            animateSection1(des_section, des_title, des_bars, des_description, imgs1, imgs2)
        } else if (des.index === 1) {
            new TimelineMax({ delay: 0.5 }).fromTo(des_title, 0.4, { x: -700 }, { x: 0 });
            des_bars.forEach(bar => {
                new TimelineMax({ delay: 0.7 }).fromTo(bar, 0.5, { x: -150 }, { x: 0 });
            });
            new TimelineMax({ delay: 0.8 }).fromTo(des_description, 0.6, { x: -650 }, { x: 0 });

            let fills = des_section.querySelectorAll('.fill');

            fills.forEach(bar => {
                bar.classList.add('animated-progress');

            })
        }

        if (org.index === 0) {

            const org_section = org.item;
            let imgs1 = org_section.querySelectorAll('.section-img-1');
            let imgs2 = org_section.querySelectorAll('.section-img-2');

            imgs1.forEach(orgImg => {
                new TimelineMax().fromTo(orgImg, 0.5, { x: 0, opacity: 1 }, { x: 200, opacity: 0 });
            })

            imgs2.forEach(orgImg => {
                new TimelineMax(0.2).fromTo(orgImg, 0.5, { x: 0, opacity: 1 }, { x: 200, opacity: 0 });
            })
        } else {
            let fills = org.item.querySelectorAll('.fill');

            fills.forEach(bar => {
                bar.classList.remove('animated-progress');
            })
        }
    }
});

function animateSection1(section, title, bars, description, imgs1, imgs2) {
    new TimelineMax({ delay: 0.5 }).fromTo(title, 0.4, { x: -500 }, { x: 0 });
    bars.forEach(bar => {
        new TimelineMax({ delay: 0.7 }).fromTo(bar, 0.5, { x: -150 }, { x: 0 });
    });
    new TimelineMax({ delay: 0.8 }).fromTo(description, 0.6, { x: -200 }, { x: 0 });



    imgs1.forEach(des_img => {
        new TimelineMax({ delay: 0.5 }).fromTo(des_img, 1, { x: 200, opacity: 0 }, { x: 0, opacity: 1 });
    })

    imgs2.forEach(des_img => {
        new TimelineMax({ delay: 0.3 }).fromTo(des_img, 1, { x: 200, opacity: 0 }, { x: 0, opacity: 1 });
    })
}

// Animation at app begining
function initAnimation() {
    // des section
    const section = $('.s1');
    const title = $('.s1 .title h1');
    const bars = $('.s1 .border-line').children().toArray();
    const description = $('.s1 .slide-in-left');

    let imgs1 = $('.section-img-1').toArray();
    let imgs2 = $('.section-img-2').toArray();

    console.log(imgs1)
    animateSection1(section, title, bars, description, imgs1, imgs2);
}

initAnimation()

// Mixitup
$('#mix-wrapper').mixItUp({
    load: {
        sort: 'order:asc'
    },
    animation: {
        effects: 'fade rotateZ(-180deg)',
        duration: 700
    },
    selectors: {
        target: '.mix-target',
        filter: '.filter-btn',
        sort: '.sort-btn'
    },
    callbacks: {
        onMixEnd: function(state) {
            console.log(state)
        }
    }
});

// Contact form
var form = document.getElementById("contact-form");

async function handleSubmit(event) {
    console.log('submit');
    event.preventDefault();
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        $('#success').addClass('expand');
        form.reset()
    }).catch(error => {
        console.log(error)
    });
}
form.addEventListener("submit", handleSubmit)