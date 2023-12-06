let userInput = prompt ('What year were you born? ');

let parsedInput = parseFloat(userInput);
let chineseZodiac = (userInput-4)%12;

if(chineseZodiac === 0){
    console.log ('You are a Rat in the Chinese Zodiac :)')
}

else if(chineseZodiac === 1){
    console.log ('You are an Ox in the Chinese Zodiac :)')
}

else if(chineseZodiac === 2){
    console.log ('You are an Tiger in the Chinese Zodiac :)')
}

else if(chineseZodiac === 3){
    console.log ('You are an Rabbit in the Chinese Zodiac :)')
}
else if(chineseZodiac === 4){
    console.log ('You are an Dragon in the Chinese Zodiac :)')
}
else if(chineseZodiac === 5){
    console.log ('You are an Snake in the Chinese Zodiac :)')
}
else if(chineseZodiac === 6){
    console.log ('You are an Horse in the Chinese Zodiac :)')
}
else if(chineseZodiac === 7){
    console.log ('You are an Goat in the Chinese Zodiac :)')
}

else if(chineseZodiac === 8){
    console.log ('You are an Monkey in the Chinese Zodiac :)')
}
else if(chineseZodiac === 9){
    console.log ('You are an Rooster in the Chinese Zodiac :)')
}
else if(chineseZodiac === 10){
    console.log ('You are an Dog in the Chinese Zodiac :)')
}
else if(chineseZodiac === 11){
    console.log ('You are an Pig in the Chinese Zodiac :)')
};