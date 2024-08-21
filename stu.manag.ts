#!  /usr/bin/env node

import inquirer from "inquirer";

const randomNum: number = Math.floor(10000 + Math.random() * 90000);

let myBalance: number = 0;

let answer = await inquirer.prompt([
  {
    name: "student",
    type: "input",
    message: "Enter student name:",
    validate: function (value) {
      if (value.trim() !== "") {
        return true;
      }
      return "plz enter your non empty value";
    },
  },
  {
    name: "courses",
    type: "list",
    message: "select your course",
    choices: ["python", "typescript", "HTML CSS", "MS Office"],
  },
]);
const tutionfee: { [key: string]: number } = {
  "python": 2500,
  "HTML CSS": 1200,
 " typescript": 2000,
  "MS office": 3000,
};
console.log(`\n tution fees :${tutionfee[answer.courses]}/-\n`);

console.log(`balance:${myBalance}`);

let payment1 = await inquirer.prompt([
  {
    name: "payment",
    type: "list",
    message: "select payment method",
    choices: ["easypaisa", "bank transfer", "jazzcash"],
  },
  {
    name: "amount",
    type: "input",
    message: "Transfer money",
    validate: function (value) {
      if (value.trim() !== "") {
        return true;
      }
      return "plz enter a non empty value";
    },
  },
]);

console.log(`\n your payment method ${payment1.payment}\n `);

const tutionfees = tutionfee[answer.courses];
const paymentAmount = parseFloat(payment1.amount);

if (tutionfees === paymentAmount) {
  console.log(
    `Congratulations, you haave successfully enrolled in ${answer.courses}`
  );
  let ans = await inquirer.prompt({
    name: "select",
    type: "list",
    message: "what would you like to do next",
    choices: ["View status", "Exit"],
  });
  if (ans.select === "View status") {
    console.log("\n****************status**************\n");
    console.log(`Student Name:${answer.student}`);
    console.log(`Student ID:${randomNum}`);
    console.log(`Course:${answer.courses}`);
    console.log(`tution fees paid:${paymentAmount}`);
    console.log(`Balance:${(myBalance += paymentAmount)}`);
  } else {
    console.log("\n Exiting student management system \n");
  }
} else {
  console.log(`\n  your amount is not enough for your course \n`);
}


