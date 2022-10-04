window.addEventListener("scroll", function() {
  let header = document.querySelector("#home");
  header.classList.toggle("sticky", window.scrollY > 0)
})