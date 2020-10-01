function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  // grab elements
  let form = document.querySelector("form.contact");
  let button = document.querySelector("form.contact > button");
  let input = document.querySelector("form.contact > input");
  let errorMessage = document.querySelector("form.contact > p");
  
  // on change event handler
  button.addEventListener("click", e => {
    e.preventDefault();
    form.classList.remove("email-input-error");
    input.classList.remove("icon-error");
    errorMessage.classList.remove("email-input-error");
    if (!validateEmail(input.value)) {
      form.classList.add("email-input-error");
      input.classList.add("icon-error");
      errorMessage.classList.add("email-input-error");
    }
  });
  