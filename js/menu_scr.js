let navA = document.querySelectorAll(".nav__links a");
// console.log(navA);

for (i = 0; i < navA.length; i++) {
  navA[i].classList.add("unchecked");
  navA[i].onclick = () => {
    document.querySelector(".nav-toggle").checked = false;
  };
}
