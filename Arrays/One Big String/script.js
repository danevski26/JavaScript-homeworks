let array1 = ['Hello ','there ', 'students ', 'of ', 'SEDC','!']
let str;
function string (arr){
    for(let i=0;i<arr.length;i++){
     str = arr.join("")
    }
    console.log (str)
}

string (array1)
