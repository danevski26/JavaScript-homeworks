function dynamicTable (rows, cols){
let table = document.getElementById('table');
for (let i = 1;i<=rows;i++){
  let row = table.insertRow();
  for (let j = 1;j<=cols;j++){
    let cell = row.insertCell();

    cell.textContent = 'Row-'+i+' Column'+j;
    cell.addEventListener('click', function(){
      alert ("Clicked:"+ this.textContent);
    });
  }
}
document.body.appendChild(table);
}

let numRows = prompt("Enter the number of rows:");
let numCols = prompt("Enter the number of cols:");

numRows = parseFloat(numRows);
numCols = parseFloat(numCols);


dynamicTable (numRows,numCols)
