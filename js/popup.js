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
