var mapLink = document.querySelector(".main-contacts-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show-map");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show-map");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-show-map")) {
        mapPopup.classList.remove("modal-show-map");
    }
    }
});




