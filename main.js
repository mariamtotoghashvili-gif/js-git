let number = 10
if(number % 2 ===0 && number % 5 === 0) {
console.log("რიცხვი არის 2-ის და 5-ის ჯერადი")    
} else if (number % 2 ===0 && number % 5 !== 0 ) {
console.log("რიცხვი იყოფა მხოლოდ 2-ზე")    
} else if (number % 2 !== 0 && number % 5 ===0) {
    console.log ("რიცხვი იყოფა მხოლოდ 5-ზე")
}
else {
    console.log( "რიცხვი არ არის 2-ისა 5ის ჯერადი")
} 


//დავალება 2 

//თუ ბარათი აქვს მაშინ შეამოწმე PIN
//თუ PIN სწორია  შეამოწმე ბალანსი
//თუ >= 100 დააბრუნე "Withdraw allowed"
//თუ არა დააბრუნე "Not enough money"

let hasCard = true 
let pin = "1265"
let balance = "2454"


if (hasCard === true) {
if (pin === "1265") {
    if (balance >= 100) {
        console.log("Withdraw allowed")
    } 
     else {
        console.log("Not enough money")
    }
} else {
    console.log("Wrong PIN")
}  
} else {
    console.log("No card")
} 