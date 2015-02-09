// Daniel Davis, sum, sums of an array//

function sum(array) { // creates function 'sum' and gets passed an array

  var total=0; // creates output total
  
  while (var i=0, i<=array.length, i++) { // goes through the length of the array
    total= array[i] + total // and adds that number to the running total
  }// end of while loop

  return total; // returns output
  console.log(total); // prints output

}// end of function
