const inquirer = require('inquirer');
const files = require('./files');

module.exports = {
  askIgnoreFiles: (filelist) => {
    const questions = [
      {
        type: 'checkbox',
        name: 'ignore',
        message: 'Select the files and/or folders you wish to ignore:',
        choices: filelist,
        default: ['node_modules']
      }
    ];
    return inquirer.prompt(questions);
  },
  askPermission: () => {
    const questions = [
      {
        message: "Do you want to create .editorConfig?",
        type: "confirm",
        name: "editor",
        default: true
      }
    ];
    return inquirer.prompt(questions);
  }
}
