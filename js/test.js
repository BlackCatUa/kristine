// nav-toggle

// console.log("hello world");
// document.getElementById("nav-toggle").addEventListener("change", function () {
//   if (this.checked) {
//     console.log("checked");
//   } else console.log("unchecked");
// });

// console.log(document.getElementById("nav-toggle").checked);
// console.log("hello world");
// -----------------------------------------------------
// let uncheck = document.querySelector(".uncheck");
// // console.log(uncheck);

// let che = document.querySelector(".nav-toggle");

// uncheck.onclick = () => {
//   if (che.checked) {
//     che.checked = false;
//   } else {
//     che.checked = false;
//   }
// };
// -----------------------------------------------------
// document.querySelector(".uncheck").onclick = () => {
//   document.querySelector(".nav-toggle").checked = false;
// };
// -----------------------------------------------------
// let navA = document.querySelectorAll(".nav__links a");
// console.log(navA);

// for (i = 0; i < navA.length; i++) {
//   navA[i].classList.add("unchecked");
// }

// let un = document.querySelectorAll(".uncheck");
// // console.log(un);

// for (i = 0; i < un.length; i++) {
//   // console.log(un);
//   un[i].onclick = () => {
//     document.querySelector(".nav-toggle").checked = false;
//   };
// }
// console.log(un);
// -----------------------------------------------------

let navA = document.querySelectorAll(".nav__links a");
console.log(navA);
for (i = 0; i < navA.length; i++) {
    navA[i].classList.add("unchecked");
    navA[i].onclick = () =>{
      document.querySelector(".nav-toggle").checked = false;
    };
  }


