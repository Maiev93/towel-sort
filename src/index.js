
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix != undefined) {
    let elem;
    let newArr = [];
    for (arr of matrix) {
        if (matrix.indexOf(arr) % 2 != 0) {
        arr.sort().reverse();
        }  
        for (n of arr) {
            elem = Number(n); 
            console.log(elem);
            newArr.push(elem);
        }    
    }         
    console.log(newArr);
    return newArr;
  } else {
    let empty = []; 
    return empty;
  }  
  }