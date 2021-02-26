# react-with-apis
React Demo with APIs

## Setup

### Install Nvm

#### MacOS/Linux

To install or update nvm, run the install script for nvm located [here](https://github.com/nvm-sh/nvm/blob/v0.35.3/install.sh) or using the following commands. 

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
```
```
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
```

If you have troubleshooting issues, check out the [github repo](https://github.com/nvm-sh/nvm#troubleshooting-on-linux) for nvm.

#### Windows 

To install nvm on Windows, download the installer [here](https://github.com/coreybutler/nvm-windows/releases).

If you have issues or need more info, check out the [github repo](https://github.com/coreybutler/nvm-windows) for nvm-windows.

### Install node

We need to install the latest version of node and make sure we use it.

```
nvm install 12
nvm use 12
node --version
```

### Run Create React App

Run the [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html)

Run either block of commands below.
```
npm init react-app my-app
cd my-app
npm start
```
``` 
npx create-react-app my-app
cd my-app
npm start
```

[npm](https://www.npmjs.com/) and [yarn](https://yarnpkg.com/) are separate node package managers that helps you install dependencies, test, run, and build your app. You can use either one as long as you stick with one.


### Check your start app

If you open [http://localhost:3000](http://localhost:3000), you should see the starter app running from the `create-react-app` command.

## React Demo

This repo contains starter code (with some CSS formatting and the file structure) and the finished code from the demo. Take a peek or try running it locally by running a few commands below. 

```
git clone https://github.com/kristenkoyanagi/intro-to-react
cd intro-to-react
cd starter-app #or finished-app
yarn install  #or npm install
yarn start #or npm start
```