const inputs = document.querySelectorAll(".inputs");
inputs.forEach(function (item){
    item.addEventListener("change", () => {
       if(item.value !== ""){
        item.classList.add("campo-preenchido")
       } else {
        item.classList.remove("campo-preenchido")
       }
    })
})

// const btn = document.querySelector(".enviar");
// btn.addEventListener("click", (event) => {
// event.preventDefault ();
 
//   inputs.forEach((input => {
//     if (inputs.value == ""){
//      input.classList.add("campo-vazio") 
//     } else {
//       input.classList.remove("campo-vazio")
//     }
//   }))
  
// })



const btn = document.querySelector(".enviar");

btn.addEventListener("click", (event) => {
  event.preventDefault();

  inputs.forEach((input) => {
    const aviso = input.nextElementSibling; // pega a div logo depois do input

    if (input.value.trim() === "") {
      input.classList.add("campo-vazio");
      aviso.style.display = "block"; // mostra mensagem
    } else {
      input.classList.remove("campo-vazio");
      aviso.style.display = "none"; // esconde mensagem
    }
  });
});
