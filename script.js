//Burger Menü effects

const menuButton = document.querySelector(".menu-button");
const menuClasses = document.querySelector(".menu");
const disableClasses = document.querySelector(".disable-scroll");

const callMenuEvents = () => {
  event.preventDefault();
  if (!menuClasses.classList.contains("menu-visibility")) {
    menuClasses.classList.add("menu-visibility");
    document.body.classList.add("disable-scroll");
  } else {
    menuClasses.classList.remove("menu-visibility");
    document.body.classList.remove("disable-scroll");
  }
};

menuButton.addEventListener(
  "click",
  (event) => {
    callMenuEvents(event);
  },
  false
);
menuButton.addEventListener(
  "touchend",
  (event) => {
    callMenuEvents(event);
  },
  false
);

const callDocumentEvents = (event) => {
  event.preventDefault();
  if (event.target == menuClasses) {
    menuClasses.classList.remove("menu-visibility");
    document.body.classList.remove("disable-scroll");
  }

  if (event.target == infovideobg) {
    infovideobg.classList.remove("infovideo-bg-visibility");
    infovideoModal.classList.remove("infovideo-modal-visibility");
    infovideo.pause();
    infovideo.currentTime = 0;
  }

  if (event.target == videobg) {
    videobg.classList.remove("video-bg-visibility");
    videoModal.classList.remove("video-modal-visibility");
    imagevideo.pause();
    imagevideo.currentTime = 0;
  }
};

document.addEventListener(
  "click",
  (event) => {
    callDocumentEvents(event);
  },
  false
);
document.addEventListener(
  "touchend",
  (event) => {
    callDocumentEvents(event);
  },
  false
);

const myfunc = () => {
  document.body.classList.remove("disable-scroll");
  menuClasses.classList.remove("menu-visibility");
};

//Info Video Overlay

const landingBtn = document.querySelector(".btn-info");
const infovideoModal = document.querySelector(".infovideo-modal");
const infovideobg = document.querySelector(".infovideo-bg");

const infovideo = document.querySelector(".info-video");

landingBtn.addEventListener("click", function () {
  infovideobg.classList.toggle("infovideo-bg-visibility");
  infovideoModal.classList.toggle("infovideo-modal-visibility");
});

//Image Video Overlay

const pulseBtn = document.querySelector(".btn-image");
const videoModal = document.querySelector(".video-modal");
const videobg = document.querySelector(".video-bg");

const imagevideo = document.querySelector(".image-video");

pulseBtn.addEventListener("click", function () {
  videobg.classList.toggle("video-bg-visibility");
  videoModal.classList.toggle("video-modal-visibility");
});

//Form Validation

const form = document.getElementById("form");
const submitBtn = document.querySelector(".submit-btn");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
  checkSuccess();
});

const setError = (element, message) => {
  const inputbox = element.parentElement;
  const errorDisplay = inputbox.querySelector(".error");

  errorDisplay.innerText = message;
  inputbox.classList.add("error");
  inputbox.classList.remove("success");
};

const setSuccess = (element) => {
  const inputbox = element.parentElement;
  const errorDisplay = inputbox.querySelector(".error");

  errorDisplay.innerText = "";
  inputbox.classList.add("success");
  inputbox.classList.remove("error");
};

const vorname = document.querySelector(".vorname");
const nachname = document.querySelector(".nachname");
const email = document.querySelector(".email");
const telefon = document.querySelector(".telefon");
const nachricht = document.querySelector(".nachricht");

const validate = () => {
  const regex = /^[a-z\-\s\ü\ä\ö]+$/i;
  const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  if (vorname.value === "") {
    setError(vorname, "Bitte Vorname eintragen.");
  } else if (regex.test(vorname.value) === false) {
    setError(vorname, "Bitte gültigen Vornamen eintragen.");
  } else {
    setSuccess(vorname);
  }

  if (nachname.value === "") {
    setError(nachname, "Bitte Nachname eintragen.");
  } else if (regex.test(nachname.value) === false) {
    setError(nachname, "Bitte gültigen Nachnamen eintragen.");
  } else {
    setSuccess(nachname);
  }

  if (email.value === "") {
    setError(email, "Bitte Email eintragen.");
  } else if (!emailIsValid(email.value)) {
    setError(email, "Bitte gültige Email eintragen.");
  } else {
    setSuccess(email);
  }

  if (telefon.value === "") {
    setError(telefon, "Bitte Telefonnummer eintragen.");
  } else if (telefon.value.length < 8 || telefon.value.length > 15) {
    setError(telefon, "Bitte gültige Telefonnummer eintragen.");
  } else {
    setSuccess(telefon);
  }

  if (nachricht.value === "") {
    setError(nachricht, "Bitte Nachricht eintragen.");
  } else {
    setSuccess(nachricht);
  }
};

const checkSuccess = () => {
  if (document.querySelectorAll("#form .success").length === 5) {
    document.querySelector(".send-message").classList.add("send-message-anim");
    setTimeout(() => {
      document
        .querySelector(".send-message")
        .classList.remove("send-message-anim");
    }, "4500");
    console.log(document.querySelector(".send-message"));
    form.reset();
  } else {
    console.log("Formular nicht submitted");
  }
};

// Intersection Observer

const revealElements = [...document.querySelectorAll(".effect")];

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      textReveal(entry);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.2,
  }
);

revealElements.forEach((element) => {
  observer.observe(element);
});

function textReveal(entry) {
  if (entry.target.classList.contains("effect")) {
    entry.target.classList.toggle("effect-visible", entry.isIntersecting);
  }
}

// Prevent URL change on Links

const pageOne = document.querySelector(".page-1");
const pageTwo = document.querySelector(".page-2");
const pageFour = document.querySelector(".page-4");
const pageSix = document.querySelector(".page-6");

const firstLink = document.getElementById("page1");
const secondLink = document.getElementById("page2");
const thirdLink = document.getElementById("page4");
const fourthLink = document.getElementById("page6");

firstLink.addEventListener("click", () => {
  pageOne.scrollIntoView({ behavior: "instant" });
});
secondLink.addEventListener("click", () => {
  pageTwo.scrollIntoView({ behavior: "instant" });
});
thirdLink.addEventListener("click", () => {
  pageFour.scrollIntoView({ behavior: "instant" });
});
fourthLink.addEventListener("click", () => {
  pageSix.scrollIntoView({ behavior: "instant" });
});
