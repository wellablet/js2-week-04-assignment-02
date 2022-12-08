const isTheWordSplit = (pArr) => {
    let condition = "not possible"
    const baseWord = pArr[0];
    const otherWords = pArr[1].split(",");
    for (let index = 0; index < otherWords.length; index++) {
      for (let index2 = 0; index2 < otherWords.length; index2++) {
          if (otherWords[index]+otherWords[index2]===baseWord){
              condition = otherWords[index].concat(",",otherWords[index2])
          }
      }
    }
    return condition
  };
  export {
      isTheWordSplit
  };
