const bigBlock = document.getElementById("wrapper");

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

const generateRandomNumber=(min=0 , max=256)=>(Math.random()*((max-min)+min)).toFixed(0);

const generateColor = () => ("rgba("+generateRandomNumber()+","+generateRandomNumber()+","+generateRandomNumber()+")")

const fillBlocksInNewColor = () => {
  const divBlocks = [...bigBlock.childNodes];
  for (let i = 0; i < 25; i++) {
    divBlocks[i].style.backgroundColor = generateColor();
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
const interval=1000;
setInterval(fillBlocksInNewColor, interval);
