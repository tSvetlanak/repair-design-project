import '../sass/style.scss'
console.log("Hello, SASS");
const FirstButton = document.getElementById("button-1");
console.log(FirstButton);
const SecondButton = document.getElementById("button-2");
console.log(SecondButton);
FirstButton.addEventListener("click", func, { passive: true }, false);
SecondButton.addEventListener("click", func, { passive: true }, false);

function func() {
    const content = document.getElementById("content");
    switch (content.className) {
        case "slider__fouth-container first-slid":
            content.className = ("slider__fouth-container second-slid");
            break;
        case "slider__fouth-container second-slid":
            content.className = ("slider__fouth-container third-slid");
            break;
        case "slider__fouth-container third-slid":
            content.className = ("slider__fouth-container first-slid");
            break;
            return content.className;
    }

}