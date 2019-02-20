let image = document.querySelector("#logo")
image.onclick = toggleClass;

function toggleClass(){
    if(image.className === 'logo'){
        image.className = ''
    } else {
        image.className = 'logo'
    }
}
