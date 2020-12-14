const makeChinaCharacter=()=>{
  let sign=Date.now();
  sign=sign.toString().slice(sign.length-5,5);
  sign=String.fromCharCode(sign);
  return sign;  
}

const getRandomChinese=(length)=>new Promise((resolve,reject)=>{
  if(length<0){
    return reject("length is negative number")
  }
  let i=0;
  let finalString="";
  while(i<length){
    finalString+=makeChinaCharacter();
    i++;
  }
  return resolve(finalString);
})

getRandomChinese(5)
  .then((resolve)=>console.log(resolve))
  .catch((reject)=>console.log(reject));

// getRandomChinese(-5)
//   .then((resolve)=>console.log(resolve))
//   .catch((reject)=>console.log(reject))
