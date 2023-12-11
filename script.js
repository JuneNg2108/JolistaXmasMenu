document.addEventListener("DOMContentLoaded", function () {
    const welcomePage = document.getElementById("welcome-page");
    const cakeSelectionPage = document.getElementById("cake-selection-page");
    const gingerbreadPage = document.getElementById("gingerbread-page");
    const butterPage = document.getElementById("butter-page");
    const fruitcakePage = document.getElementById("fruitcake-page");
    const orderPage = document.getElementById("order-form");
    const thankYouPage = document.getElementById("thank-you-page");

    const touchToBegin = document.getElementById("welcome-page");

    touchToBegin.addEventListener("click", function () {
        welcomePage.classList.add("hidden");
        cakeSelectionPage.classList.remove("hidden");
        document.getElementById("background-music").play();
        setBodyBackground("background.png"); // Set default background
    });

    function showPage(pageId, background) {
        const pages = document.querySelectorAll(".page");
        pages.forEach(page => page.classList.add("hidden"));
        document.getElementById(pageId).classList.remove("hidden");
        setBodyBackground(background);
    }

    function setBodyBackground(background) {
        document.body.style.backgroundImage = `url('${background}')`;
    }

    function setupNextButton(currentPage, nextPage, background) {
        const nextBtn = currentPage.querySelector(".next-btn");
        nextBtn.addEventListener("click", function () {
            showPage(nextPage, background);
        });
    }

    function setupBackButton(currentPage, prevPage, background) {
        const backBtn = currentPage.querySelector(".back-btn");
        backBtn.addEventListener("click", function () {
            showPage(prevPage, background);
        });
    }

    // Setup navigation for cake pages
    setupNextButton(gingerbreadPage, "butter-page", "background.png");
    setupNextButton(butterPage, "fruitcake-page", "background.png");
    setupNextButton(fruitcakePage, "order-form", "background.png");

    // Setup back buttons for cake pages
    setupBackButton(butterPage, "gingerbread-page", "background.png");
    setupBackButton(fruitcakePage, "butter-page", "background.png");

    // Add event listeners for cake buttons
    const gingerbreadBtn = document.getElementById("gingerbread-btn");
    const butterBtn = document.getElementById("butter-btn");
    const fruitcakeBtn = document.getElementById("fruitcake-btn");

    gingerbreadBtn.addEventListener("click", function () {
        showPage("gingerbread-page", "background.png");
    });

    butterBtn.addEventListener("click", function () {
        showPage("butter-page", "background.png");
    });

    fruitcakeBtn.addEventListener("click", function () {
        showPage("fruitcake-page", "background.png");
    });

    const orderForm = document.getElementById("cake-order-form");

    orderForm.addEventListener("submit", function (event) {
        event.preventDefault();
        showPage("thank-you-page", "thankyou.png");
    });
});
