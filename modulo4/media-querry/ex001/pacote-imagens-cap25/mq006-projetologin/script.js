document.getElementById('burguer').addEventListener('click', clicarMenu)
function clicarMenu () {
    
    if(menu.style.display == 'block') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
    }
}