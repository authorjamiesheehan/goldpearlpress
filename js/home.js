const fadeIn = () => anime({
    targets: '.hero div',
    translateY: {
        value: -20,
        // delay: 400,
        // easing: 'easeInOutQuart',
        duration: 1000,
    },
    easing: 'easeInOutSine',
    // borderRadius: 8,
    // direction: 'reverse',
    opacity: 1,
    // looping: true,
    duration: 500
});

window.addEventListener('load', fadeIn);