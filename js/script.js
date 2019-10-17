// окно карты
if (document.querySelector(".main-contacts-map")) {
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
}

// окно покупки
var buyLink = document.querySelectorAll(".item-buy");

var buyPopup = document.querySelector(".modal-buy");
var buyClose = buyPopup.querySelector(".modal-close");

for (var i=0; i < buyLink.length; i++) {
    buyLink[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    buyPopup.classList.add("modal-show-buy");
  });
};

buyClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  buyPopup.classList.remove("modal-show-buy");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (buyPopup.classList.contains("modal-show-buy")) {
      buyPopup.classList.remove("modal-show-buy");
    }
  }
});

// окно формы

if (document.querySelector(".write-us ")) {
  var link = document.querySelector(".write-us ");

  var popup = document.querySelector(".modal-write");
  var close = popup.querySelector(".modal-close");

  var form = popup.querySelector("form");
  var user = popup.querySelector("[name=user-name]");
  var mail = popup.querySelector("[name=user-mail]");
  var message = popup.querySelector("[name=user-message]");

  var isStorageSupport = true;
  var storageUser = "";
  var storageMail = "";

  try {
    storageUser = localStorage.getItem("user");
  } catch (err) {
    isStorageSupport = false;
  }

  try {
    storageMail = localStorage.getItem("mail");
  } catch (err) {
    isStorageSupport = false;
  }

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show-popup");

    if (storageUser) {
      user.value = storageUser;
      mail.focus();
    }
      if (storageMail) {
        mail.value = storageMail;
        message.focus();
      }
    else {
      user.focus();
    }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show-popup");
    popup.classList.remove("modal-error");
  });

  form.addEventListener("submit", function (evt) {
    if (!user.value || !mail.value || !message.value)  {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("user", user.value);
        localStorage.setItem("mail", mail.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show-popup")) {
        popup.classList.remove("modal-show-popup");
        popup.classList.remove("modal-error");
      }
    }
  });
}



