# Web project starter package

## The setup includes

- Node 6.11.0
- Yarn 1.0.0
- Webpack 3.5.3
- React 15.6.1
- Babel 6.25.0
- Hot Reload 3.0.0
- CSS loader 0.28.4
- SASS loader 6.0.6
- Surge 0.19.0
- Firebase 4.2.0
- SVG inline support
- Development environment (~ 5Mb)
- Production environment (~ 435Kb)
- Normalizer and CSS reset
- Basic CSS Grid layout to begin a project
- Using <b>mobile first approach </b>and <b>rem units</b>, calculated for easy px use (for example 1.4rem = 14px)

Great setup to start a new web project.

You need to have node installed on your computer. Before launching a project make sure you have yarn packages installed. To do that use brew to install yarn and then launch "yarn" command in terminal.

Use <a href="https://nodejs.org/en/"> this link</a> to install node.js. <br/>
Use <a href="https://yarnpkg.com/lang/en/docs/install/"> this link</a> to install yarn.

To check if all packages are up to date use <pre>yarn outdated</pre> command.
To upgrade them to latest version use <pre>yarn upgrade package_name@latest</pre> or <pre>yarn upgrade --latest</pre> to update all of them to latest version.

To start a development project run <pre>yarn start</pre> or <pre>yarn start:dev</pre> This will build a development bundle with hot reload etc.

To build a production bundle run <pre>yarn start:prod</pre> This will build a production bundle which will be much smaller with all js files minified. Then you can use <b>main.js</b> file to upload it to your hosting.

Launch <pre>localhost:3000</pre> in your browser to open a project.

To deploy a project to surge use <pre>yarn deploy </pre> command. Currenly it is named <b>webpack-setup.surge.sh</b> but you can rename it in <b>CNAME</b> file.
