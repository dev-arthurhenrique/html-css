document.getElementById('burguer').addEventListener('click', clicaMenu)
function clicaMenu () {
    if (menu.style.display == 'block') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
    }
}
function mudouTamanho () {
    if(window.innerWidth >= 600) {
        menu.style.display = 'block'
    }
}