function animateBox(el) {
    anime.set(el, {
        left: '50%',
        top: '100%',
        translateX: '-50%',
        translateY: '-100%'
    });
    anime({
        targets: el,
        top: [
            {value: '50%'},
            {value: '0'},
            {value: '50%'},
            {value: '100%'},
        ],
        translateY: [
            {value: '-50%'},
            {value: '0'},
            {value: '-50%'},
            {value: '-100%'},
        ],
        left: [
            {value: '100%'},
            {value: '50%'},
            {value: '0'},
            {value: '50%'},
        ],
        translateX: [
            {value: '-100%'},
            {value: '-50%'},
            {value: '0'},
            {value: '-50%'},
        ],
        easing: 'easeInOutSine',
        delay: function (el, i) {
            return i * 200;
        },
        duration: 4000,
        loop: false
    });
}


document.querySelector('#js-init-anim').addEventListener('click', function(evt){
    evt.preventDefault();
    animateBox('#js-animated-box');
})
