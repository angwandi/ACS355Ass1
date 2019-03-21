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
    document.writeln(eval("2+5"))
}