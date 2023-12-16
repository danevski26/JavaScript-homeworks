console.log ('CONNECTED');

function sumSquare (x,y){
    let sum = 0;
    let i = x;
    while(i<=y){
        sum += Math.pow(i,2);
        i++;
    }
    return sum;
}
console.log (sumSquare (101,150));

