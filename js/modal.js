$(document).ready(function() {
    // MODAL
    var modalText = {
        cryptia: {
            title: 'World of Cryptia',
            tag: 'BLOCKCHAIN BASED WEB GAME',
            hasImages: true,
            detail: 'World of Cryptia is a blockchain game which is built on Ethereum. In this world, user can trade or explore items using ETH. The game logic and smart contracts are inspired by Cryptokitties.',
            link: 'https://www.worldofcryptia.com/#/'
        },
        gsop: {
            title: 'GSOP',
            tag: 'GNT System Operation Program',
            detail: 'An internal management system of GNT Vietnam. I created a new service called \'TechTalk\', where employees can create a technical meeting, schedule it, then invite others to joins.',
        },
        mcc: {
            title: 'Metanet Messenger Platform',
            tag: 'A MESSAGING WEB-APP FOR BUSINESS',
            detail: 'MMP provides features for chatting (individual or group chat) and announcements in a business environment. In this project, I mainly took care the chat group, where I used Spring Boot, STOMP websocket, Redis, ...',
        },
        kms: {
            title: 'KMS',
            tag: 'KNOWLEDGE MANAGEMENT SYSTEM',
            detail: 'It’s an e-learning system that was built on microservices architecture. I researched and developed a cluster of second level cache in Spring Boot using Ehcache3. This was also the first time I worked with thread pool. Then I used my knowledge about Spring’s monitoring to build a monitor system on Grafana.'
        },
        metahub: {
            title: 'MetaHUB',
            tag: 'METANET CONTACT CENTER',
            detail: 'MetaHUB is an intelligent contact center solution that enables integrated customer communication management by converging know-how about contact center consulting business and new technologies.',
            link: 'http://www.metanet.co.kr/en/se_so_006.php'
        },
        afes: {
            title: 'AFES',
            tag: 'ANTI-FRAUD EXAMINATION SYSTEM',
            detail: 'An Anti-fraud examination system which uses Blockchain to ensure that all the data related to examination will be trustworthy and It is almost impossible to change the existing data.',
            link: 'https://gitlab.com/mainguyenngocanh1411/antifraud-system'
        },
        inutify: {
            title: 'Inutify',
            tag: 'A DOG RECOGNITION MOBILE APP',
            hasImages: true,
            detail: 'By training on Convolutional Neural Network (CNN), a dog-identifiable model be created. In details, the input image will be extracted into specific features, after several layers, the trained model can determine the class that the dog belongs to.',
            link: 'https://gitlab.com/inutify'
        },
        humandetect: {
            title: 'Human Detection',
            tag: 'USING SVM TO RECOGNIZE HUMAN',
            hasImages: true,
            detail: 'To fulfill our project, we use HOG algorithm with SVM (Support Vector Machine) to build classification model and pyramid moving – window detector to detect human in images.',
            link: 'https://github.com/anhbt27/Human-Detection'
        },
        bkrypto: {
            title: 'BKrypto',
            tag: 'A MOBILE APP FOR SOLVING CIPHERS',
            hasImages: true,
            detail: 'This app can help you solve some cryptograms and provides some tutorials for learning new ciphers, then you can practice with some given cryptograms.',
            link: 'https://github.com/lml43/bkrypto'
        }
    };

    $('#gallery .button').on('click', function() {
        fillModal(this.id);
        $('.modal-wrap').addClass('visible');
    });

    $('.close').on('click', function() {
        $('#modal .btn-details').removeClass('visible');
        $('.modal-wrap, #modal .button, .carousel-wrap').removeClass('visible');
    });

    $('.mask').on('click', function() {
        $('#modal .btn-details').removeClass('visible');
        $('.modal-wrap, #modal .button, .carousel-wrap').removeClass('visible');
    });

    var carousel = $('#carousel'),
        slideWidth = 700,
        threshold = slideWidth / 3,
        dragStart,
        dragEnd;

    setDimensions();

    $('#next').click(function() {
        shiftSlide(-1);
    });
    $('#prev').click(function() {
        shiftSlide(1);
    });

    carousel.on('mousedown', function() {
        if (carousel.hasClass('transition')) return;
        dragStart = event.pageX;
        $(this).on('mousemove', function() {
            dragEnd = event.pageX;
            $(this).css('transform', 'translateX(' + dragPos() + 'px)');
        });
        $(document).on('mouseup', function() {
            if (dragPos() > threshold) {
                return shiftSlide(1);
            }
            if (dragPos() < -threshold) {
                return shiftSlide(-1);
            }
            shiftSlide(0);
        });
    });

    function setDimensions() {
        if (
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            )
        ) {
            slideWidth = $(window).innerWidth();
        }
        $('.carousel-wrap, .slide').css('width', slideWidth);
        $('.modal').css('max-width', slideWidth);
        $('#carousel').css('left', slideWidth * -1);
    }

    function dragPos() {
        return dragEnd - dragStart;
    }

    function shiftSlide(direction) {
        if (carousel.hasClass('transition')) return;
        dragEnd = dragStart;
        $(document).off('mouseup');
        carousel
            .off('mousemove')
            .addClass('transition')
            .css('transform', 'translateX(' + direction * slideWidth + 'px)');
        setTimeout(function() {
            if (direction === 1) {
                $('.slide:first').before($('.slide:last'));
            } else if (direction === -1) {
                $('.slide:last').after($('.slide:first'));
            }
            carousel.removeClass('transition');
            carousel.css('transform', 'translateX(0px)');
        }, 700);
    }

    function fillModal(id) {
        $('#modal .title-modal').text(modalText[id].title);
        $('#modal .detail').text(modalText[id].detail);
        $('#modal .tag').text(modalText[id].tag);
        $('#modal .btn-details')
            .addClass('visible')
            .parent()
            .attr('href', './portfolio.html#' + id);

        console.log(modalText[id].hasImages)
        if (modalText[id].hasImages) {

            $('.carousel-wrap')
                .addClass('visible');

            $.each($('#modal .slide'), function(index, value) {
                $(this).css({
                    background: "url('../img/projects/slides/" + id + '-' + index + ".png') center center/cover",
                    backgroundSize: 'cover'
                });
            });
        }

        if (modalText[id].link)
            $('#modal .btn-view-site')
            .addClass('visible')
            .parent()
            .attr('href', modalText[id].link);

        $.each($('#modal li'), function(index, value) {
            $(this).text(modalText[id].bullets[index]);
        });

    }
});