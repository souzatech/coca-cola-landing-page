window.addEventListener("scroll", function() {
  let header = document.querySelector("#home");
  header.classList.toggle("sticky", window.scrollY > 0)
})

window.addEventListener("scroll", activateCokeTurnAnimation)

function activateCokeTurnAnimation() {
  let cokeImg = document.querySelector("#slider-image")
  console.log(window.scrollY);
  cokeImg.classList.toggle("active", window.scrollY >= 400 && window.scrollY <= 1000)
}