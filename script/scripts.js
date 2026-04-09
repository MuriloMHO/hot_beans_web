let items = document.querySelector(".dropdown_content")

let clickMenu = function() {
    if (items.style.display === 'none' || items.style.display === '') {
        items.style.display = 'block'
    } else {
        items.style.display = 'none'
    }
}