const openMenuIcon=document.getElementById("open-menu-icon")
const openMenuCont=document.getElementById("harmburger-menu-icon-cont")
const closeMenuIcon=document.getElementById("close-menu-icon")
const closeMenuCont=document.getElementById("close-menu-icon-cont")
const menuUl=document.getElementById("menu-list-ul")
const navListCont=document.getElementById("nav-list-cont")

openMenuIcon.addEventListener("click",openMenu)
closeMenuIcon.addEventListener("click",closeMenu)

function openMenu() {
    closeMenuCont.classList.remove("hidden")
    openMenuCont.classList.add("hidden")
    menuUl.classList.remove("hidden")
    navListCont.classList.add("items-start","bg-blue-700")
    navListCont.classList.remove("items-end")
}

function closeMenu() {
    closeMenuCont.classList.add("hidden")
    openMenuCont.classList.remove("hidden")
    menuUl.classList.add("hidden")
    navListCont.classList.remove("items-start","bg-blue-700")
    navListCont.classList.add("items-end")
}



