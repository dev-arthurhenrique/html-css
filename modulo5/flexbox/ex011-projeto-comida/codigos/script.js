document.getElementById('menu').addEventListener('click', clicarMenu)
function clicarMenu () {
    const nav = document.getElementById('nav')
    if (nav.style.display == 'block') {
        nav.style.display = 'none'
    } else {
        nav.style.display = 'block'
    }
}