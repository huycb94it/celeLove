function toggleAudio() {
  var music = document.getElementById("music");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

function calculateDays() {
  const loversStartDate = new Date("2022-09-23");
  const diffTime = Math.abs(new Date() - loversStartDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  document.getElementById("dayCounter").innerHTML = diffDays;
}

calculateDays();
