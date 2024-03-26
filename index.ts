#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

console.log(chalk.yellowBright.bgGreenBright("\tWellcome to  number Guessing Game"));

const RandomNumber = Math.floor(Math.random() * 5 + 1);

const answer = await inquirer.prompt([
  {
    name: "userGuessedNumber ",
    type: "number",
    message: chalk.magentaBright("\nguess a number in 1 to 6:\t"),
  },
]);
if (answer.userGuessedNumber === RandomNumber) {
  console.log(chalk.blueBright("\nyou guess right number."));
} else {
  console.log(chalk.redBright("\nyou guess wrong number"));
}
