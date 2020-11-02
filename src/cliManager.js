const { program } = require("commander");
const colors = require("colors");

program
  .name("cdf")
  .usage("")
  .option("-d, --dir <type>", "Name of the dir you want to create".yellow)
  .option(
    "-l, --lang <type>",
    "Language in which the template is, and the new files will be created of"
      .yellow + " (default: cpp)"
  )
  .option(
    "-n, --number <type>",
    "Number of cpp files to be created inside that dir".yellow,
    4
  )
  .option(
    "-t, --template",
    "Add the dir where the CLI will look for the template, simply go to the desired dir and use cdf -t"
      .yellow,
    false
  )
  .option(
    "-r, --root",
    "Sets the current dir as the root dir, for making new dirs, works same as -t, but sets the curr dir as root"
      .yellow,
    false
  )
  .helpOption("-h, --help", "display help for command".yellow)
  .on("--help", () => {
    console.log("\n created by nishchay17".brightMagenta);
  });

module.exports = program;
