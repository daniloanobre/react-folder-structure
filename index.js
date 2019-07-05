#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const repo = require('./lib/repo');
const directories = require('./lib/directories');

clear();
console.log(
  chalk.yellow(
    figlet.textSync('react folder structure', { horizontalLayout: 'full' })
  )
);

run = async () => {
  try {
    await repo.createGitignore();

    repo.createEditorConfig();

    directories.createFolderStructure();

  } catch (error) {
    console.log(chalk.red(error));
  }
};

run();
