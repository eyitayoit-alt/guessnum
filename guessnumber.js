const readLine=require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})
let level=1
let numrange=2
let numarr=[1,2]

let usernum=" "
function getInput(){
readLine.question(`Guess a number between 1 and ${numrange}: `, numinput=>{
    usernum=parseInt(numinput)
    guessNumber(usernum)
})
}
function guessNumber(inputnum){
let num= Math.floor(1+Math.random()*numarr.length)
if(usernum==num){
    numarr.push(numarr.length+1)
      level++
    console.log(`Congratulations you geuessed correctly, move to level ${level}`)
    numrange++
    getInput()
}
else{
    console.log(`Incorrect number Try again, the correct Number is ${num}`)
    getInput()
}
}
getInput()
