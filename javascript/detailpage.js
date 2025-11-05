const upDownForm = document.querySelector("main section:nth-of-type(3)")
const upDownButton = document.querySelector("main section:nth-of-type(2) button")

upDownButton.addEventListener("click", () => {
    upDownForm.classList.toggle("open");
})
