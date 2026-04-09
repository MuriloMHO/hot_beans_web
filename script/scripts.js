let clickMenu = function() {
    const items = document.querySelector(".dropdown_content");
    const botton = document.querySelector(".dropbtn");
    
    if (items.style.display === 'none' || items.style.display === "") {
        items.style.display = 'block'
        botton.innerHTML = "X";
    } else {
        items.style.display = 'none'
        botton.innerHTML = "☰";
    }
}