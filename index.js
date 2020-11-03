const { setRootDir, getRootDir } = require("./src/rootDirHelper");
const { program } = require("./src/cliManager");
const { makeDir } = require("./src/maker");
const { setTemplateDir } = require("./src/templateHelper");
const colors = require("colors");
const storage = require("node-persist");
const { askToOpenVscode } = require("./src/ask");

exports.mainCliProcess = async (args) => {
  program.parse(args);
  await storage.init({
    dir: `${__dirname}/storage`,
    stringify: JSON.stringify,
    parse: JSON.parse,
    encoding: "utf8",
    logging: false,
    expiredInterval: 2 * 60 * 1000, // every 2 minutes the process will clean-up the expired cache
    forgiveParseErrors: false,
  });
  if ((await storage.getItem("lang")) === undefined) {
    storage.setItem("lang", "cpp");
  }
  if (!!program.root) {
    // if the user want to set the current dir as root dir
    let newRootDir = process.cwd(); // getting the curr dir
    let isSuccessfull = setRootDir(newRootDir); // setting the curr dir to root dir and returning the res
    if (!!isSuccessfull) {
      console.log(`"${newRootDir}" is now the root dir.`.cyan);
    } else {
      console.log(
        "error: There is some problem, please try again later.".bgRed
      );
    }
  } else if (!!program.template) {
    // if the user want to set the current dir to look for template
    let currDir = process.cwd(); // getting the curr dir
    let isSuccessfull = setTemplateDir(currDir);
    if (!!isSuccessfull) {
      console.log(
        `CLI will look in "${currDir}" for template now, make sure you have "template.txt" here.`
          .cyan
      );
    } else {
      console.log(
        "error: There is some problem, please try again later.".bgRed
      );
    }
  } else {
    // if the use want to make dir in root dir
    const rootDir = await getRootDir(); // getting the root dir
    const dirName = program.dir; // getting the name of dir to be created
    const numberOfFiles = parseInt(program.number); // default is 4
    if (program.lang) {
      // if user wnat to change the default lang
      await storage.setItem("lang", program.lang);
    }
    if (dirName == undefined) {
      // if no name was given
      console.log("error: option '-d, --dir <type>' argument missing".red);
    } else {
      const res = await makeDir(rootDir, dirName, numberOfFiles); // make new dir inside root dir
      if (typeof res == "boolean") {
        if (!!res === true) {
          console.log(`${dirName} created at "${rootDir}"`.bgBrightGreen.black);
          askToOpenVscode();
        } else {
          console.log(
            "error: There is some problem, please try again later.".bgRed
          );
        }
      } else {
        console.log(res.red);
      }
    }
  }
};
