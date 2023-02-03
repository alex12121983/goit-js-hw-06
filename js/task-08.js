const form = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("All fields should be fill!");
  }
    
  console.log(`email: ${email.value}, Password: ${password.value}`);

  event.currentTarget.reset();
};

form.addEventListener("submit", handleSubmit);
