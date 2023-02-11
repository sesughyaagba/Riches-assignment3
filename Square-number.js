function squareDigits(number) {
    return +(number.toString().split('').map(val => val * val).join(''));
  }
  console.log(squareDigits(9119))