const ghp = require('gh-pages');

ghp.publish('public', {
  branch: 'master',
  repo: 'https://github.com/Paramvir109/Paramvir109.github.io.git',

}, err => {
  if (err) {
    console.log(err);
  }
});