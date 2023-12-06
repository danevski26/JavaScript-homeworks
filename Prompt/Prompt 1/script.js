let userInput = prompt ("How much money do you have on your bank account?");

let parsedInput = parseFloat(userInput);
console.log (parsedInput)

if (parsedInput === 1000000){
    console.log('You should buy yourself a Bugatti =)');
}
    else if (parsedInput === 500000){
        console.log ('You should buy yourself a Rolls Royce =)' );
    }
    else if (parsedInput === 250000){
        console.log ('You should buy yourself a Ferrari =)' );
    }

    else if (parsedInput === 100000){
        console.log ('You should buy yourself a Lambo =)' );
    }
    else if (parsedInput === 50000){
        console.log ('You should buy yourself a Audi =)' );
    }
    else if (parsedInput === 10000){
        console.log ('You should buy yourself a Volkswagen =)' );
    }
    else {
        console.log (null)
    }