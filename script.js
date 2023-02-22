
for(let counter="#"; counter.length<=7; counter+="#"){
console.log(counter)

}

for (let num = 1; num <= 100; num++){
   
    if (num % 3 ===0 &&  num % 5 === 0) {
        console.log("FizzBuzz")
    }
   else if (num % 3 === 0) {
        console.log("Fizz")
    }
    else if (num % 5 === 0) {
        console.log("Buzz")
    }
    else console.log(num)
}

for (let char = "#"; char.length <= 18; char += " # "){
    console.log(char)
  
}