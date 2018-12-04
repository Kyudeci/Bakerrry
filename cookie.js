let suggest = document.getElementById("suggest");//input
let submit2 = document.getElementById("submit2");//submit button

function order() {
  let para = document.createElement("p");//paragraph element
  let orderBox = document.getElementById("display");// container for new paragraph tag
  let code = document.createTextNode(suggest.value);// input value
  orderBox.appendChild(para);
  para.appendChild(code);
  para.classList.add("typewriter");
  suggest.value = "";
}
submit2.addEventListener("click", order);
suggest.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    document.getElementById("submit2").click();
  }
});
//Rework into OOP-- in essence create a class
class Cookie {
  constructor() {

  }
}
