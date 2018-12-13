// ANIMATION ON SCROLL HANDLER

function animateHTML() {
    var elems, windowHeight;
    function init() {
        elems = document.querySelectorAll('.hidden');
        windowHeight = window.innerHeight;
        addEventHandlers();
        checkPosition();
    }
    function addEventHandlers() {
        window.addEventListener('scroll', checkPosition);
        window.addEventListener('resize', init);
    }
    function checkPosition() {
        for (let i = 0; i < elems.length; i++) {
            let positionFromTop = elems[i].getBoundingClientRect().top;
            if (positionFromTop - windowHeight <= 0) {
                elems[i].classList.replace('hidden', 'move-up');
            }
        }
    }
    return {
        init: init
    };
};
animateHTML().init();

// SCROLL ANIMATION

document.querySelectorAll('.nav__link').forEach(function(el) {
    el.addEventListener('click', function(e) {
        e.preventDefault;
        var selector = '.' + e.target.id;
        scrollIt(document.querySelector(selector));
    });
});

function scrollIt(element) {
    window.scrollTo({
        'behavior': 'smooth',
        'left': 0,
        'top': element.offsetTop - 100
    });
};