//In the project folder, generate a basic package.json
npm init -y
//Remove type: commomjs or module
//Or copy a template one.

npm install --save-dev webpack webpack-cli

mkdir scr
touch scr/index.js
//create all dependencies, ie code files at src/
touch scr/template.js

//After each install, update the corresponding config file.
//Install plugin that inject script into html
npm install --save-dev html-webpack-plugin

//Install loader for CSS
npm install --save-dev style-loader css-loader

//Install loader for images in template.html
npm install --save-dev html-loader

//Install additional plugins.

//Install lint
//npm init @eslint/config@latest -- --config <existing config>
//for example eslint-config-xo, eslint-config-airbnb, eslint-config-airbnb-base, eslint-config-standard
//Or
npm install --save-dev eslint eslint-config-standard
const standard = require('eslint-config-standard')

module.exports = [
standard,
{
// your overrides here
}
]
//Install Prettier
npm install --save-dev --save-exact prettier
//Next create a .prettierignore file to exclude files:
node --eval "fs.writeFileSync('.prettierignore','# Ignore artifacts:\nbuild\ncoverage\n')"

//Install the dev live server
npm install --save-dev webpack-dev-server
npx webpack serve | npm run dev
//View web page on localhost:8080

//Install merge to have split config files
npm install --save-dev webpack-merge

//Or wrap up all those commands into a big "install" command in package.json 20250721. At the moment not working.

npm install --save-dev webpack webpack-cli && npm install --save-dev html-webpack-plugin && npm install --save-dev style-loader css-loader && npm install --save-dev html-loader && npm install --save-dev webpack-dev-server && npm install --save-dev webpack-merge
