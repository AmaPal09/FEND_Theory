// L1_Rest_Parameter
/********************************************************************/
// Rest Parameter
//--------------------------------------------------------------------
// The rest parameter, also written with three consecutive
// dots ( ... ), allows you to represent an indefinite number of
// elements as an array. This can be helpful in a couple of
// different situations.

const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
console.log(total, subtotal, tax, items);
//Returns
//20.17 18.67 1.5 ["cheese", "eggs", "milk", "bread"]


/********************************************************************/
// Variadic functions
//--------------------------------------------------------------------
//Another use case for the rest parameter is when you’re working
// with variadic functions. Variadic functions are functions that
// take an indefinite number of arguments.

/********************************************************************/
//arguments object
//--------------------------------------------------------------------
// The arguments object is an array-like object that is available
// as a local variable inside all functions. It contains a value for
// each argument being passed to the function starting at 0 for the
// first argument, 1 for the second argument, and so on.

function sum() {
  let total = 0;
  for(const argument of arguments) {
    total += argument;
  }
  return total;
}

/********************************************************************/
//Using the rest parameter
//--------------------------------------------------------------------
function sum2(...nums) {
  let total = 0;
  for(const num of nums) {
    total += num;
  }
  return total;
}



/*
 * Programming Quiz: Using the Rest Parameter (1-5)
 */

// your code goes here

function average(...nums) {
    let count = nums.length;
    if (count < 1) {
        return 0
    }

    let total = 0;
    for (num of nums) {
        total += num;
    }
    return Number((total/count).toFixed(1));
    // return total/count
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());
//Returns
// 4
// 5
// 312.8
// 0