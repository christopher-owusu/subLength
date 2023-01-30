const subLength = (str, char) => {
  let firstIndex = str.indexOf(char)
  let lastIndex = str.lastIndexOf(char)
  let distance = lastIndex - (firstIndex - 1) 

  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++
    }
  }

  if (count !== 2) {
    return 0
  } else if(count === 1) {
    return 0
  }
  return distance
}

console.log(subLength('Saturday', 'a')); // returns 6
console.log(subLength('summer', 'm')); // returns 2
console.log(subLength('digitize', 'i')); // returns 0
console.log(subLength('cheesecake', 'k')); // returns 0