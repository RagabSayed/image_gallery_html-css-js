let slides = document.getElementsByClassName('input-radio');
function addActive(slide) {
    slide.checked = true;
};

function removeActive(slide) {
    slide.checked = false;
};

let xxx =    window.onload = function () {
        addActive(slides[0]) ;
        setInterval (function () {
            for (let i = 0; i < slides.length; i++) {
                if (i + 1 == slides.length) {
                    addActive(slides[0]);
                    setTimeout(removeActive, 300, slides[i]);
                    break;
                }
                if (slides[i].checked == true) {
                    setTimeout(removeActive, 300, slides[i]);
                    addActive(slides[i + 1]);
                    break
                }
            }
        }, 2000);
    };
slides.addEventListener('onclick', function (e) {
    e.preventDefault();
    clearInterval(xxx);
})