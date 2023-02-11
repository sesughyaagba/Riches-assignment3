
const twoSum = (array, goal) => {
    let answer = [];

    for(let i = 0; i < array.length; i++){
       for(let j = i + 1; j < array.length; j++){
          if (array[i] + array[j] === goal) {
        answer.push(array[i], array[j])
        return answer
          }
       }
     }
}
    console.log(twoSum([3,2,4], 6))
