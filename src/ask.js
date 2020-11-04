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
        exec("code1 .", (error, stdout, stderr) => {
          if (error) {
            console.log(
              "error: can't open vscode, make sure it's installed".red
            );
          }
        });
      }
    })
    .catch((error) => {
      console.log(
        "error: There is some problem, please try again later.".bgRed
      );
    });
};
