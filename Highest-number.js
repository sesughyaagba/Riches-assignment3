const arr = [2, 5, 8, 1, 6, 9, 5];
  const largestNumber = (num) =>{
    let highest = 0;
    for (let i =0; i < num.length; i++){
      if (num[i] > highest){
        highest = num[i]
      }
    }
    return highest;
  }
  console.log(largestNumber(arr))