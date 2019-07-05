const fs = require('fs');
const chalk = require('chalk');

module.exports = {
  createFolderStructure: (next) => {
    try {
      if (fs.existsSync('src')) {
        if (!fs.existsSync('src/apis')) {
          fs.mkdirSync('src/apis');
        }

        if (!fs.existsSync('src/assets')) {
          fs.mkdirSync('src/assets');
        }

        if (!fs.existsSync('src/hoc')) {
          fs.mkdirSync('src/hoc');
        }

        if (!fs.existsSync('src/hooks')) {
          fs.mkdirSync('src/hooks');
        }

        if (!fs.existsSync('src/components')) {
          fs.mkdirSync('src/components');
        }

        if (!fs.existsSync('src/containers')) {
          fs.mkdirSync('src/containers');
        }

        if (!fs.existsSync('src/store')) {
          fs.mkdirSync('src/store');
        }
        if (!fs.existsSync('src/store/actions')) {
          fs.mkdirSync('src/store/actions');
        }
        if (!fs.existsSync('src/store/reducers')) {
          fs.mkdirSync('src/store/reducers');
        }
        console.log(chalk.green('Folders created successfully.'));
      } else {
        console.log(chalk.red('src folder does not exists. First enter in the project directory.'));
      }
    } catch (error) {
      console.log(chalk.red(error));
    }
  }
}
