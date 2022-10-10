const tabs = document.querySelectorAll(".tabss li");
const hometab = document.querySelector(".home");
const prizetab = document.querySelector(".prices");
const prizePage = document.querySelector(".prizes-panel");
const homePage = document.querySelector(".home-panel");

var current = "home";

function removeActive(btns) {
  for (l of btns) {
    l.classList.remove("active");
  }
}

for (var i = 0; i <= tabs.length; i++) {
  tabs[i].addEventListener("click", function (e) {
    removeActive(tabs);
    // for (l of tabs) {
    //   l.classList.remove("active");
    // }
    e.target.classList.add("active");
    current = e.target.value;

    if (e.target === prizetab) {
      homePage.classList.add("hidden");
      prizePage.classList.remove("hidden");
    } else if (e.target === hometab) {
      prizePage.classList.add("hidden");
      homePage.classList.remove("hidden");
    }
  });
}
