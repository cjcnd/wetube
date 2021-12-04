const user = document.getElementById("user");
const password = document.getElementById("password");
const email = document.getElementById("email");
const form = document.querySelector(".main-join__form");

const handelSubmit = async (event) => {
  event.preventDefault();
  try {
    await axios.post("/auth/join", {
      user: user.value,
      password: password.value,
      email: email.value,
    });
  } catch (e) {
    console.log(e);
  }
};

form.addEventListener("submit", handelSubmit);
