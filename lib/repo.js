const _ = require('lodash');
const fs = require('fs');

const inquirer = require('./inquirer');

const editor = `################################################
#   ╔═╗╔╦╗╦╔╦╗╔═╗╦═╗┌─┐┌─┐┌┐┌┌─┐┬┌─┐
#   ║╣  ║║║ ║ ║ ║╠╦╝│  │ ││││├┤ ││ ┬
#  o╚═╝═╩╝╩ ╩ ╚═╝╩╚═└─┘└─┘┘└┘└  ┴└─┘
#
# This file .editorconfig exists to help
# maintain consistent formatting throughout the
# files in your Sails app.
#
# For the sake of convention, the Sails team's
# preferred settings are included here out of the
# box.  You can also change this file to fit your
# team's preferences (for example, if all of the
# developers on your team have a strong preference
# for tabs over spaces),
#
# To review what each of these options mean, see:
# http://editorconfig.org/
#
################################################
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
`;

module.exports = {
  createGitignore: async () => {
    const filelist = _.without(fs.readdirSync('.'), '.git', '.gitignore');

    if (filelist.length) {
      const answers = await inquirer.askIgnoreFiles(filelist);
      if (answers.ignore.length) {
        fs.writeFileSync('.gitignore', answers.ignore.join('\n'));
        console.log('.gitignore created successfully.');
      }
    }
  },
  createEditorConfig: async () => {
    const answer = await inquirer.askPermission(["yes", "no"]);

    if (answer.editor) {
      fs.writeFileSync('.editorconfig', editor);
      console.log('.editorconfig created successfully.')
    }

  }
}
