function fullName (arr1, arr2){
    for(let i = 0;i < arr1.length && i < arr2.length;i++){
        let fullname = arr1[i] + arr2[i];
        let index = 1;
        index ++;
        console.log (fullname)

    }
}

let firstNames =['John ', 'Bob ', 'Anna '];
let lastNames = ['Doe','Bobski', 'Ann' ];

fullName (firstNames, lastNames)