const { exec } = require("child_process");
const inquirer = require("inquirer");
const colors = require("colors");

exports.askToOpenVscode = () => {
  inquirer
    .prompt([
      {
        name: "vsCode",
        type: "confirm",
        message: "Do you want to open vs code?",
      },
    ])
    .then((answers) => {
      if (!!answers.vsCode) {
        exec("code .", (error, stdout, stderr) => {
          if (error) {
            return console.log("error: can't open vscode".red);
          }
        });
      }
    })
    .catch((error) => {
      return false;
    });
};
