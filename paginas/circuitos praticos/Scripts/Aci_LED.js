var botao = document.body.querySelector("#botao_acionar");
var led = document.body.querySelector("#led");

botao.addEventListener("mousedown", function () {
  var led = document.body.querySelector("#led");
  led.src = "../../Imagens/Componentes imagens/Imagem/LED aceso.png";

})
botao.addEventListener("mouseup", function () {
  var led = document.body.querySelector("#led");
  led.src = "../../Imagens/Componentes imagens/Imagem/LED.png";
})