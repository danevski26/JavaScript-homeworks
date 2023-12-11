console.log ('CONNECTED')

function ATM (){
    let amount = prompt ("Please еnter the amount you want to withdraw ");
    let parsedAmount = parseFloat (amount)
    let balance = 10000;
    if(parsedAmount <= balance){
        balance = balance - parsedAmount
        console.log ("Here are your ", parsedAmount, " dollars.")
        console.log ("Your balance now is ", balance, "dollars.")
    }
    else {
        console.log ("You currently do not have this amount of funds.")
    }
}


ATM ()