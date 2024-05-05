'use strict';

var chalk = require('../chalk');
var log = require('../log');
var core = require('../core');
var session = require('../session');

const cmd = {
  command: 'studyplan [plan]',
  aliases: ['sp'],
  desc:    'List questions by study plan',
  builder: function(yargs) {
    return yargs
      .positional('plan', {
        type:     'string',
        default:  '',
        describe: 'List questions by study plan'
      })
      .example(chalk.yellow('leetcode studyplan plan'), 'List questions that belong to "plan" studyplan')
  }
};

cmd.handler = function(argv) {
  session.argv = argv;
  core.getStudyPlan(argv, function(e, studyPlan) {
    if (e) return log.fail(e);

    log.info(JSON.stringify(studyPlan));
  });
};

module.exports = cmd;
