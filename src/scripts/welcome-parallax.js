const parallax = document.querySelector(".welcome-parallax");
const layers = parallax.children;

function moveLayersDependsOnScroll(wScroll){
  Array.from(layers).forEach(layer => {
    const layerSpeed = layer.dataset.speed;
    const strafe = wScroll * layerSpeed / 10;

    layer.style.transform = `translateY(-${strafe}%)`
  })
}

window.addEventListener("scroll", e => {
  const wScroll = window.pageYOffset;
  console.log(wScroll);
  moveLayersDependsOnScroll(wScroll);
})