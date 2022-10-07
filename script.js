const formEl = document.getElementById("form");
const emailEl = document.getElementById("email");

const errorImgEl = document.getElementById("error-img");
const errorMsgEl = document.getElementById("error-msg");
const successMsgEl = document.getElementById("success-msg");

emailEl.addEventListener("keyup", (e) => {
  const emailValue = emailEl.value.trim();
  if (isEmail(emailValue)) {
    resetError();
  }
});

emailEl.addEventListener("blur", (e) => {
  const emailValue = emailEl.value.trim();
  if (emailValue === "" || isEmail(emailValue)) {
    resetError();
  } else {
    checkEmail();
  }
});

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  checkEmail();
});

const checkEmail = () => {
  const emailValue = emailEl.value.trim();
  if (emailValue === "") {
    setError();
  } else if (!isEmail(emailValue)) {
    setError();
  } else {
    setSuccess();
  }
};

const setError = () => {
  successMsgEl.classList.remove("show");
  errorImgEl.classList.add("show");
  errorMsgEl.classList.add("show");
  emailEl.classList.add("error-border");
};

const resetError = () => {
  errorImgEl.classList.remove("show");
  errorMsgEl.classList.remove("show");
  emailEl.classList.remove("error-border");
};

const setSuccess = () => {
  emailEl.value = "";
  successMsgEl.classList.add("show");
  errorImgEl.classList.remove("show");
  errorMsgEl.classList.remove("show");
  emailEl.classList.remove("error-border");
};

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
