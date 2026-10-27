// let body = document.querySelector("body")
// let h1 = document.querySelector("h1")
// body.removeChild(h1)
// let h1 = document.querySelector("#trocarCor")
// let body = document.querySelector("body")
// h1.style.color = "red"
// h1.style.backgroundColor = "blue"
// h1.style.height = "20px"
// h1.style.fontSize = "20px"

// body.style.backgroundColor = "blue"

// var h1 = document.querySelector("h1")
 //var paragrafo = document.querySelector("p")

 //paragrafo.innerText = h1.innerText

//  <select id="cor" onchange="verificar()">
// //   <option>vermelho</option>
// //   <option>azul</option>
// //   <option>amarelo</option>
// //   <option>verde</option>
// //   <option>laranja</option>
// //   <option>roxo</option>
// // </select>

//  <script>
//  function verificar() {

//    let cor = document.getElementById("cor").value;

//    document.body.style.backgroundColor = cor;

//    if (cor == "vermelho")
//    alert("cor primaria escolhida");

// else if (cor == "azul")
//    alert("cor primaria escolhida");

//  else if (cor == "amarelo")
//    alert("cor primaria escolhida");

//  else
//    alert("cor secundaria");
 //}
 //</script>

// let button = document.querySelector("button");
// button.addEventListener("click",function(){
//     console.log("ok")
// })

document.querySelector("button").addEventListener("click", function() {
  document.body.style.backgroundColor = "green";
  document.body.style.color = "white";
});
