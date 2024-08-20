// Versão menos verbosa
document
  .querySelector("input[name='entradaDeTexto']")
  .addEventListener("input", function () {
    this.value !== ""
      ? this.classList.add("destaqueDaBorda")
      : this.classList.remove("destaqueDaBorda");
  });

// Versão verbosa
/*
let entradaDeTexto = document.querySelector("input[name='entradaDeTexto']");
// console.log(inputUm);

entradaDeTexto.addEventListener("input", function () {
  if (entradaDeTexto.value !== "") {
    entradaDeTexto.classList.add("destaqueDaBorda");
  } else {
    entradaDeTexto.classList.remove("destaqueDaBorda");
  }
});
*/
