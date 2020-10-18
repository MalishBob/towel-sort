
// You should implement your task here.

module.exports = function towelSort (matrix) {

  let new_arr = [];

  if(!matrix) return [];

  for (let i = 0; i < matrix.length; i++) {
    if(i%2===0 || i === 0){
      for (let j = 0; j < matrix[i].length; j++) {
        new_arr.push(matrix[i][j]);
      }
    } else {
      for (let j = matrix[i].length-1; j >= 0; j--) {
        new_arr.push(matrix[i][j]);
      }
    }

  }

  return new_arr;
}
