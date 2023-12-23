let array1 = [4,21,65,13]

function printNumbers(arr){
    let div =document.getElementById('div');
    div.innerHTML +='<ul>'
    for(let i = 0;i<arr.length;i++){
        div.innerHTML+=`<li>${arr[i]}</li>`
    }
    div.innerHTML+='</ul>'
    console.log (printNumbers)
}

function sum(arr){
    let divTwo = document.getElementById('divTwo')
    let sum = 0;
    let nums ='';
    for(let i = 0;i<arr.length;i++){
       sum += arr[i];
       nums = arr[i+1];
       console.log (nums)
    }
    divTwo.innerHTML += sum;

}


printNumbers (array1)
sum (array1)

