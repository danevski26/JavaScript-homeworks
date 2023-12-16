
let sum = 0;
function sumNumbers (arr){
    for (let i=0; i < arr.length; i++){
         sum += arr[i];
       
    }
    console.log(sum)
}

let array1 = [5,3,9,18,32]

sumNumbers (array1)

function validateNumber(arr){
    for(let i = 0; i<arr.length;i++){
        if(isNaN(arr[i])){
            console.log ('Please enter a numeric value.')
            return
        }
        else{
            console.log(arr)
            return
        }
    }
    

}

validateNumber (array1)

let array2 = ['John Doe', 56, 'Hello', 24,90,22]

validateNumber (array2)
