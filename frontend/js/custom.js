// Custom JS

let acc = document.getElementsByClassName("accordion");
let length = acc.length;

for (let i = 0; i < length; i++) {
  acc[i].addEventListener("click", function () {
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
