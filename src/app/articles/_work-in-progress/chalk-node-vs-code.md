---
title: How to use Chalk terminal styling with Node & VS Code, 2024 guide
date: July 06, 2024
writer: Dan Edwards
tags: Node, Chalk, Code Runner, VS Code
metadescription: Learn how to use Chalk for terminal styling in Visual Studio Code. This 2024 guide covers setting up ES modules, running Node.js scripts with NPM, troubleshooting errors, and fixing issues with Chalk not working in VS Code.
keywords: Chalk terminal styling, Visual Studio Code Chalk setup, VS Code terminal colors, ES modules in Node.js, Code Runner extension, run Node.js scripts in VS Code, Chalk integration with VS Code, 2024 Chalk guide, terminal color support, debugging with colors in VS Code, Node.js, NPM, errors, Chalk not working in VS Code
---

If you’re frustrated with trying to get chalk to work in VS Code, you’ve come to the right place. Despite having 250 million weekly downloads, the docs haven’t been updated, and it took me much longer than expected to figure out what seems like quite a simple technology, and there are far too many Stack Overflow threads full of frustration. Here’s how I got it to work.

## Main causes of errors

-  Importing chalk incorrectly
-  Using the output terminal instead of the integrated terminal

### Install, import & use chalk

1. Firstly, install chalk. The docs say that you're better off using version 4, but I've found the latest version to work perfectly fine.

```bash
npm install chalk
```

2. Next, you need to import chalk properly - the official docs are out of date in this regard. Chalk is now an ES module, so you need to import it like this:

```jsx
// myChalkFile.js

import chalk from 'chalk';

console.log(chalk.blue(`This is a fun fact`));
console.log(chalk.red(`Error: something went wrong`));
console.log(chalk.green(`You're doing great. Keep up the good work!`));
console.log(
	chalk.yellow(
		`Remember to drink water, exercise, and keep in touch with your friends and family!`
	)
);
```

However, ES modules won’t work by default, so you need to add this line to `settings.json`

```json
// settings.json

{
	"type": "module"
}
```

If you don’t have a settings.json, you can create one by running this in the VS Code integrated terminal

```bash
npm init -y
```

3. Chalk should now be configured to work properly. You can run the code and view the styled output with this command:

```bash
node myChalkFile.js
```

However, running code with the shortcut **Control Shift N** won’t work. This is because that command uses the output terminal (which doesn’t support text styling, as far as I can tell), which is different from the integrated terminal (which does support styling). If you want to use a keyboard shortcut, you can set it up like this:

## Setup to run the code with a keyboard shortcut

1. Install the [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner) VS Code extension - I’ve attached a link for reference, but it’s much easier to install it by searching for it directly in VS Code.

Next, configure the extension settings by adding this to your VS Code `settings.json`:

```json
// settings.json

{
	// Your existing settings
	"code-runner.runInTerminal": true,
	"code-runner.executorMap": {
		"javascript": "node",
		"typescript": "ts-node"
	},
	"code-runner.clearPreviousOutput": true,
	"code-runner.executorMapByFileExtension": {
		".js": "node",
		".ts": "ts-node"
	},
	"code-runner.env": {
		"FORCE_COLOR": "1"
	}
}
```

2. Ensure the code you want to run is your active tab, and use **Command Shift N** as usual to run the code

-  The code runs, but now in the terminal tab, instead of the output tab.
