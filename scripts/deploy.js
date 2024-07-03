// scripts/deploy.js
require('dotenv').config();
const { execSync } = require('child_process');
const ghpages = require('gh-pages');
console.log('Deploying to GitHub Pages...')
const repoUrl = `https://${process.env.GITHUB_TOKEN}@github.com/Ruijan/solar_system_tuto.git`;
execSync('git submodule init');
execSync('git submodule update');
ghpages.publish('build', {
    branch: 'gh-pages',
    repo: repoUrl,
    user: {
        name: 'ruijan',
        email: 'rechenmann@gmail.com'
    },
    core: {
        longpaths: true
    },
    dotfiles: true, // this will include .env file if needed for environment variables
    history: false, // ensures no commit history is preserved (cleaner deploys)
    message: 'Auto-generated commit', // optional commit message
    force: true // force push to the gh-pages branch
}, (err) => {
    if (err) {
        console.error('Error deploying to GitHub Pages:', err);
    } else {
        console.log('Successfully deployed to GitHub Pages');
    }
});
