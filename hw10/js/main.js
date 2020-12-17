const keys = ["q", "w", "e", "r", "t", "y", "й", "ц", "у", "к", "е", "н"];

const previousElement = {
  previusElementCode: 5,

  setPrevElem: (elemId) => (this.previusElementCode = elemId),
  getPrevElem: () => this.previusElementCode,
};

function playAudio(audioName) {
  let audio = new Audio();
  audio.src = `sounds/sound${audioName.toUpperCase()}.mp3`;
  audio.play();
}

function startSound(soundCode, previusSoundCode) {
  const element = document.getElementById(soundCode);
  element.classList.add("key-focus");
  playAudio(soundCode);

  if (previusSoundCode && soundCode !== previusSoundCode) {
    const prevElement = document.getElementById(previusSoundCode);
    prevElement.classList.remove("key-focus");
  }
}

function choseSoundFromButtonKey({ key }) {
  if (keys.includes(key)) {
    let indexOfKey = keys.indexOf(key);
    if (indexOfKey > 5) {
      indexOfKey -= 6;
      key = keys[indexOfKey];
    }
    startSound(key, previousElement.getPrevElem());
    previousElement.setPrevElem(key);
  }
}

previousElement.setPrevElem(null);
addEventListener("keydown", choseSoundFromButtonKey);
