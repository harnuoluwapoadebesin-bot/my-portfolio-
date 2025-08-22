let app = document.getElementById("app");
let selection = document.getElementById("selection");
let head = document.getElementById("head");

document.getElementById("show").addEventListener("click",()=>{
    selection.classList.remove("non-active");
    head.classList.add("non-active");
    app.classList.add("non-active");
})

document.getElementById("cancelbtn").addEventListener("click", () => {
  selection.classList.add("non-active");
  head.classList.remove("non-active");
  app.classList.remove("non-active");
})

document.getElementById("homebtn").addEventListener("click", () => {
  selection.classList.add("non-active");
  head.classList.remove("non-active");
  app.classList.remove("non-active");
  let a = document.createElement("a");
  a.href = "#home";
  a.click();
})

document.getElementById("aboutbtn").addEventListener("click", () => {
  selection.classList.add("non-active");
  head.classList.remove("non-active");
  app.classList.remove("non-active");
  let a = document.createElement("a");
  a.href = "#about";
  a.click();
})

document.getElementById("skillsbtn").addEventListener("click", () => {
  selection.classList.add("non-active");
  head.classList.remove("non-active");
  app.classList.remove("non-active");
  let a = document.createElement("a");
  a.href = "#skills";
  a.click();
})

document.getElementById("contactbtn").addEventListener("click", () => {
  selection.classList.add("non-active");
  head.classList.remove("non-active");
  app.classList.remove("non-active");
  let a = document.createElement("a");
  a.href = "#contact";
  a.click();
})

document.getElementById("facebook").addEventListener("click",()=>{
    let a = document.createElement("a");
    a.href = "https://www.facebook.com/profile.php?id=61568438310789"
    a.click();
})
