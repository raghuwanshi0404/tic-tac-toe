(function () {
    let array = [
        [],
        [],
        []
    ];
    let counter = 0;
    let fetchContainer = document.querySelectorAll('.container')[0];
    
    fetchContainer.addEventListener("click", function (event) {

        let boxElement = event.target;

        if (boxElement.innerHTML != "") {
            return;
        }

        let arr = boxElement.id.split('');
        
        let row = arr[0],
            col = arr[1];
           console.log(col) 
           console.log(boxElement.id) 


        counter = counter + 1;
        if (counter % 2 == 0) {
            boxElement.innerHTML = 'x';

            array[row][col] = 'x';
        } else {
            boxElement.innerHTML = '0';
            array[row][col] = '0';
        }
        
        findWinner(array, row, col);
           
    });
})();

let resultDec =  document.querySelector('.result');

 function findWinner(params, iRow, iCol){
    if(params[iRow][0] && params[iRow][1] && params[iRow][2] && params[iRow][0] == params[iRow][1] && params[iRow][1] == params[iRow][2]){
        resultDec.innerHTML =  `Player ${params[iRow][0]} won`
        return;
        // alert(`${params[iRow][0]} -won`)
    } else if(params[0][iCol] && params[1][iCol] && params[2][iCol] && params[0][iCol] == params[1][iCol] && params[1][iCol] == params[2][iCol]){
        resultDec.innerHTML =  `Player ${params[0][iCol]} won`
        // alert(`${params[0][iCol]} -won`)
    } else if(params[0][0] && params[1][1] && params[2][2] && params[0][0] == params[1][1] && params[1][1] == params[2][2]){
        resultDec.innerHTML =  `Player ${params[iRow][iCol]} won`
        // alert(`${params[iRow][iCol]} -won`)
    }else if(params[0][2] && params[1][1] && params[2][0] && params[0][2] == params[1][1] && params[1][1] == params[2][0]){
        resultDec.innerHTML = ` Player ${params[iRow][iCol]} won`
        // alert(` Player ${params[iRow][iCol]} won`)
    }
 }

 
    
  let resestBtn = document.querySelector('#restart');
  
  resestBtn.addEventListener('click',(event) =>{
    document.getElementById("00").innerHTML = "";
    document.getElementById("01").innerHTML = "";
    document.getElementById("02").innerHTML = "";
    document.getElementById("10").innerHTML = "";
    document.getElementById("11").innerHTML = "";
    document.getElementById("12").innerHTML = "";
    document.getElementById("20").innerHTML = "";
    document.getElementById("21").innerHTML = "";
    document.getElementById("22").innerHTML = "";
    let resultDec =  document.querySelector('.result');
    resultDec.style.display = 'none';
    
 });

