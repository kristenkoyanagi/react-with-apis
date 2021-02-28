# react-with-apis
React Demo with the Skyscanner API

## Setup for Demo

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
nvm install 14
nvm use 14
node --version
```

## React Demo

This repo contains starter code (with some CSS formatting and the file structure) and the finished code from the demo. Take a peek or try running it locally by running a few commands below. 

```
git clone https://github.com/kristenkoyanagi/react-with-apis
cd react-with-apis
cd starter-app #or finished-app
yarn install  #or npm install
yarn start #or npm start
```

### Add your API key
1. Change `.env.example` to `.env`
2. Sign up for a free API Key at [Skyscanner API link](https://rapidapi.com/skyscanner/api/skyscanner-flight-search) 
3. Make sure your API key enabled
4. Add your API key to `.env` in the space provided
5. Restart your app

## If you want to build an app from scratch

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


### Check your starter app

If you open [http://localhost:3000](http://localhost:3000), you should see the starter app running from the `create-react-app` command.


## Free React Resources
Check some of these out if you want to learn more about React:
- [React Tutorial (docs)](https://reactjs.org/tutorial/tutorial.html)
- [The Beginner's Guide to React (egghead.io videos)](https://egghead.io/courses/the-beginner-s-guide-to-react)
- [Interactive React Challenges (freecodecamp)](https://www.freecodecamp.org/learn/front-end-libraries/react/)
- [Full React Course 2020 (YouTube)](https://www.youtube.com/watch?v=4UZrsTqkcW4)
