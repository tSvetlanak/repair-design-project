import '../sass/style.scss'
const FirstButtonSc = document.getElementById("btn-1");
const SecondButtonSc = document.getElementById("btn-2");
FirstButtonSc.addEventListener("click", funcSc, { passive: true }, false);
SecondButtonSc.addEventListener("click", funcSc, { passive: true }, false);

const FirstButtonFc = document.getElementById("button-1");
const SecondButtonFc = document.getElementById("button-2");
FirstButtonFc.addEventListener("click", funcFc, { passive: true }, false);
SecondButtonFc.addEventListener("click", funcFc, { passive: true }, false);

function funcFc() {
    const contentFc = document.getElementById("sliderfc");
    switch (contentFc.className) {
        case "slider__fouth-container first-slid":
            contentFc.className = ("slider__fouth-container second-slid");
            break;
        case "slider__fouth-container second-slid":
            contentFc.className = ("slider__fouth-container third-slid");
            break;
        case "slider__fouth-container third-slid":
            contentFc.className = ("slider__fouth-container first-slid");
            break;
            return contentFc.className;
    }

}

function funcSc() {
    const contentsc = document.getElementById("slidersc");
    switch (contentsc.className) {
        case "second-container__slider first-slid":
            contentsc.className = ("second-container__slider second-slid");
            break;
        case "second-container__slider second-slid":
            contentsc.className = ("second-container__slider third-slid");
            break;
        case "second-container__slider third-slid":
            contentsc.className = ("second-container__slider first-slid");
            break;
            console.log(contentsc.className);
            return contentsc.className;
    }

}

function findVideos() {
    let video = document.querySelector('.video');
    setupVideo(video);

}

function setupVideo(vid) {
    let link = vid.querySelector('.video__link');
    let button = vid.querySelector('.video__button');
    let id = 'sD5ZxmbbOeU';

    vid.addEventListener('click', () => {
        let iframe = createIframe(id);
        vid.appendChild(iframe);
        link.remove();
        button.remove();
    });

    link.removeAttribute('href');
    vid.classList.add('video--enabled');
}



function createIframe(id) {
    let iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('src', generateURL('sD5ZxmbbOeU'));
    iframe.classList.add('video__media');

    return iframe;
}

function generateURL(id) {
    let query = '?rel=0&showinfo=0&autoplay=1';

    return 'https://www.youtube.com/embed/' + id + query;
}
findVideos();