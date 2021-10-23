const toggle_theme = document.querySelector('#toggle_theme')
const body = document.querySelector("body")
let toggleDark = false
toggle_theme.addEventListener('click',function(){
    toggleDark = !toggleDark;
    toggle_theme.textContent = toggleDark ? "🌞" : "🌙"
    body.className = toggleDark ? "dark" : ""
})