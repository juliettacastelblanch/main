// Recuperar la informacion de los form item / input / textbox

const form = document.querySelector("#FormContacto"); // Get the form

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission
  const formData = new FormData(form); // Get all field data from the form
  // Output as an object
  console.log(Object.fromEntries(formData));
  // ...or iterate through the name-value pairs
  for (const pair of formData.entries()) {
    console.log(`${pair[0]}: ${pair[1]}`);
  }
});

// 1. Recuperar la información del formulario
// 1. Construir la URL de whatsapp
// 1. Injectar la URL en <a/>
// 1. Option: Cambiar <a/> por botón??
