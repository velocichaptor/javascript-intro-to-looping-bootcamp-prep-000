function forLoop(array){
  for (let i = 0; i < 25; i++){
    if (i === 1){
      array[i] = "I am 'i' strange loop."
    }
    else{
      array[i] = `I am ${i} strange loops.`
    }
  }
  console.log(array)
  return array
}

function whileLoop(number){
  while(number > 0){
    console.log(number)
    number = number - 1
  }
  return 'done'
}

var i = 0
function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop(integer){
  do{
    console.log("I run once regardless.")
  } while (incrementVariable() <= integer)
} 