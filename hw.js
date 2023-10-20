// 1.   Write an function that contains an if/else statement for the following requirements:
// - If student gets 80 or higher: console log  You did a good job
// - If students get 70 or above: console log Keep trying
// - If students get 60 or above: console log ehhhh
// - If students get 55 or above: console log Not to good
// // - Any grade lower than 55 is Bad Grade But You'll Get Em Next Time

// function grade(num) {
//     if (num > 0) {
//       if (num >= 80) {
//         console.log('You did a good job');
//       } else if (num >= 70) {
//         console.log('Keep trying');
//       } else if (num >= 60) {
//         console.log('Ehhhh');
//       } else if (num >= 55) {
//         console.log('Not so good');
//       } else if (num < 55) {
//         console.log('Bad grade, but you will get it next time');
//       }
//     } else {
//       console.log('Out of range');
//     }
//   }
  
//   let num = 100;
//   grade(num);
  


// 2.   Write a function that prints out multiples of 10 up to a given input (argument)
// function count(i) {
//     let x = 0;
//     while (x <= i) {
//       console.log(x);
//       x += 10;
//     }
//   }
  
//   count(3182);

// 3.   Write a function that takes bill amount and item price and says how many quarters they'd get in return
// function BillsReturned(AmountPaid, AmountCost) {
//     let change = AmountPaid - AmountCost;
//     let quarters = 0;
  
//     while (change >= 0.25) {
//       change -= 0.25;
//       quarters++;
//     }
  
//     return quarters;
//   }
  
//   const AmountPaid = 2023;
//   const AmountCost = 215;
  
//   const quartersChange = BillsReturned(AmountPaid, AmountCost);
//   const quartersValue = quartersChange*.25
//   console.log(`Number of Quarters: ${quartersChange}`);
//   console.log(`Quarters Value: ${quartersValue}`);
  

//4.    Write a function that prints out how many bills you would recieve in change after paying a certain amount.
//Return in as large denominations as possible. Parameters should be amount paid and amount cost
// function BillsReturned(AmountPaid, AmountCost) {
//     let change = AmountPaid - AmountCost;
//     let oneDollarBill = 0;
//     let fiveDollarBill = 0;
//     let tenDollarBill = 0;
//     let twentyDollarBill = 0;
//     let fiftyDollarBill = 0;
//     let cnote = 0;
  
//     while (change >= 100.00) {
//         change -= 100.00;
//         cnote++;
//     }
    
//     while (change >= 50.00) {
//         change -= 50.00;
//         fiftyDollarBill++;
//     }

//     while (change >= 20.00) {
//         change -= 20.00;
//         twentyDollarBill++;
//     }

//     while (change >= 10.00) {
//         change -= 10.00;
//         tenDollarBill++;
//     }

//     while (change >= 5.00) {
//         change -= 5.00;
//         fiveDollarBill++;
//     }

//     while (change >= 1.00) {
//       change -= 1.00;
//       oneDollarBill++;
//     }
    
//     return { oneDollarBill, fiveDollarBill, tenDollarBill, twentyDollarBill, fiftyDollarBill, cnote };
//     }
  
//   const AmountPaid = 8132;
//   const AmountCost = 3182;
  
// const BillsChange = BillsReturned(AmountPaid, AmountCost);
// console.log(`One Dollar Bills: ${BillsChange.oneDollarBill}`);
// console.log(`Five Dollar Bills: ${BillsChange.fiveDollarBill}`);
// console.log(`Ten Dollar Bills: ${BillsChange.tenDollarBill}`);
// console.log(`Twenty Dollar Bills: ${BillsChange.twentyDollarBill}`);
// console.log(`Fifty Dollar Bills: ${BillsChange.fiftyDollarBill}`);
// console.log(`One Hundred Dollar Bills: ${BillsChange.cnote}`);

// 5.   Write a function that uses console.log to print all the numbers from 1 to 100 with two exceptions.
//For numbers divisible by 3, print "Fizz" instead of the number,
//and for numbers divisible by 5 (and not 3), print "Buzz" instead.
//When you have that working, modify your program to print "FizzBuzz",
//for numbers that are divisible by both 3 and 5
//(and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

// const fizzBuzz = (num) => {
//     let i = 1;
//     const results = [];
  
//     while (i <= num) {
//       let output = '';
  
//       if (i % 3 === 0) {
//         output += 'Fizz';
//       }
  
//       if (i % 5 === 0) {
//         output += 'Buzz';
//       }
  
//       results.push(output || i.toString());
//       i++;
//     }
  
//     return results;
//   };
  
//   const results = fizzBuzz(100);
  
//   results.forEach((result) => {
//     console.log(result);
//   });
  