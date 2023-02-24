/* 
Homework 2/23/2023

1) Given an array, return a new array where the first and last elements from the original array are removed. I want this done in a function. If there's less than 3 elements, it shouldn't remove the items.
*/
const smallArr = ["ryan", "denise"]

const bigArr = ["ryan", "denise", "karely"]


function removeArray(array) {
  const newArray = [...array]
  if (newArray.length < 3) {
    return newArray
  } else if (newArray.length >= 3) {
    newArray.shift() && newArray.pop()
    return newArray
  }
}

// console.log(removeArray(smallArr))
console.log(removeArray(bigArr))


/*
2) Build a heading generator.
IE:
heading = 6
content = "hey there, I'm a header"
=> '<h6>hey there, I'm a header</h6>'
Keep in mind, valid heading tags are only 1-6
*/

// const heading = 4
// const content = "hey there, I'm a header"


// function headGenerator(heading, content) {
//   const newContent = `<h${heading}>${content}</h${heading}>`

//   return newContent
// }




// console.log(headGenerator(heading, content))


const heading = prompt("type a number between 1 through 6")

const content = "hey there, I'm a header"


function headGenerator(number, words) {
  if (number <= 0 || number >= 7){
    return console.log("invaild option please try again") ;
  } else {
    const newContent = `<h${number}>${words}</h${number}>`;
    return newContent;
  }

  
}




console.log(headGenerator(heading, content));


// const heading = prompt("type a number between 1 through 6")

// const content = "hey there, I'm a header"


// function headGenerator(number, words) {
//   if (number <= 0){
//     return console.log("Can't be below 1")
//   } else if (number >= 7) {
//     return console.log("can't be above 6")
//   } else if (number = NaN) {
//     return console.log("can't have letters")
//   }else {
//     const newContent = `<h${number}>${words}</h${number}>`
//     return newContent
//   }
  
// }




// console.log(headGenerator(parseInt(heading), content))

/*
3) Swap the first and last characters of a string.
IE: 
"ryan" => "nyar"
*/

const string = "jakers"

function swapWord(string) {
  const array = string.split("");
  const firstLetter = array.shift();
  const lastLetter = array.pop();
  array.unshift(lastLetter)
  array.push(firstLetter)
  
  return array
}

console.log(swapWord(string))


// const string = "jake"

// function swapWord(string) {
//   const array = string.split("");
//   const firstLetter = array[0];
//   const lastLetter = array[3];
//   array.shift()
//   array.pop()
//   array.unshift(lastLetter)
//   array.push(firstLetter)
  
//   return array
// }

// console.log(swapWord(string))
