let image = document.querySelector("#logo");
image.onclick = toggleClass;
image.onclick = window.alert(evalString());

function toggleClass() {
    if (image.className === 'logo') {
        image.className = ''
    } else {
        image.className = 'logo'
    }
}

function evalString() {
    eval("2 + 5")
}