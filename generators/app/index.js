'use strict';

const path = require('path')
const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the incredible ${chalk.red('generator-coates-content-vue')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Name of the project:',
        default: path.basename(process.cwd())
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description:',
        default: ''
      },
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    
    this.fs.copyTpl(
      this.templatePath(),
      this.destinationPath(),
      {
        name: this.name,
        description: this.description,
      },
      {
        globOptions: {
          // https://github.com/isaacs/node-glob
          dot: true,
          ignore: ['**/package-lock.json']
        }
      }
    );

    const keepEmptyFolders = [
      'static',
      'src/content/components',
      'src/content/containers',
      'src/content/screens'
    ]

    keepEmptyFolders.forEach((folder) => {
      this.fs.copy(
        this.templatePath(`${folder}/.gitkeep`),
        this.destinationPath(`${folder}/.gitkeep`)
      );  
    })
  }

  install() {
    //this.installDependencies();
  }
};
