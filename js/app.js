function animate() {
  // Animation duration is 2 seconds.
  TweenMax.fromTo("#box",1, {
  css: {
    // Uses CSS3 transform
    x: "-200px",
  }
},{

  css: {
    x: "200px",
  },


  repeat: -1,
  yoyo: true,
  ease: Power2.easeInOut,
  });
}

var $startButton = document.getElementById("start-button");

$startButton.onclick = animate;
