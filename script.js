document.addEventListener("DOMContentLoaded", () => {

    const introScreen = document.getElementById("introScreen");
    const enterBtn = document.getElementById("enterBtn");

    document.body.style.overflow = "hidden";

    enterBtn.addEventListener("click", () => {

        introScreen.classList.add("hide");

        document.body.style.overflow = "auto";

        setTimeout(() => {
            introScreen.remove();
        }, 1100);

    });

});