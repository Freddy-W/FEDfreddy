const menuButton = document.querySelector("header nav ul li button")
const menuDialog = document.querySelector("header dialog")
const closeButton = document.querySelector("header dialog button")

menuButton.addEventListener("click", () => {
    menuDialog.showModal();
})

closeButton.addEventListener("click", () => {
    menuDialog.close();
})
