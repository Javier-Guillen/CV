
let numberButtons = document.querySelectorAll(".drum").length;
for (let i = 0; i < numberButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    alert("I was clicked: " + document.querySelectorAll(".drum")[i].textContent);
  });
}
