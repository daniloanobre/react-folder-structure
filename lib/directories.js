const fs = require('fs');
const chalk = require('chalk');

const createDirectory = (path) => {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
}

module.exports = {
  createFolderStructure: () => {
    const list = ['src/apis', 'src/assets', 'src/hooks', 'src/components', 'src/containers', 'src/store', 'src/store/actions', 'src/store/reducers'];
    try {
      if (fs.existsSync('src')) {
        list.map(path => {
          createDirectory(path);
        })

        console.log(chalk.green('Folders created successfully.'));
      } else {
        console.log(chalk.red('src folder does not exists. First enter in the project directory.'));
      }
    } catch (error) {
      console.log(chalk.red(error));
    }
  }
}
