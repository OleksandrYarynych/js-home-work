const bigBlock = document.getElementById("big-block");

const createBlock = () => {
  const div = document.createElement("div");
  div.classList.add("small-block");
  return div;
};

const createArr = () => {
  const divBlocks = [];
  for (let i = 0; i < 25; i++) {
    divBlocks.push(createBlock());
  }
  return divBlocks;
};

const generateColor = () => {
  const lettersForColors = ["a", "b", "c", "d", "e", "f"];
  const min = 0;
  const max = 5;
  let red1 = (Math.random() * (max - min + min)).toFixed(0);
  let red2 = (Math.random() * (max - min + min)).toFixed(0);
  let green1 = (Math.random() * (max - min + min)).toFixed(0);
  let green2 = (Math.random() * (max - min + min)).toFixed(0);
  let blue1 = (Math.random() * (max - min + min)).toFixed(0);
  let blue2 = (Math.random() * (max - min + min)).toFixed(0);
  const color =
    "#" +
    lettersForColors[red1] +
    lettersForColors[red2] +
    lettersForColors[green1] +
    lettersForColors[green2] +
    lettersForColors[blue1] +
    lettersForColors[blue2];
  return color;
};

const fillBlocksInNewColor = () => {
  const divBlocks = [...bigBlock.childNodes];
  for (let i = 0; i < 25; i++) {
    divBlocks[i].style.background = generateColor();
  }
};

const generateBlocksInterval = () => {
  const divBlocks = createArr();
  for (let i = 0; i < 25; i++) {
    divBlocks[i].style.background = generateColor();
    bigBlock.append(divBlocks[i]);
  }
};
generateBlocksInterval();
setInterval(fillBlocksInNewColor, 1000);
