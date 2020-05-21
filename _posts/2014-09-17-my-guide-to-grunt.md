---
h1: My personal guide to GRUNT
layout: post
author: john_doe
permalink: /my-guide-to-grunt/
date: 2014-09-17T22:06:51.000Z
strapline: Not a comprehensive guide by any means, but my own guide to using GRUNT...
title: My personal guide to GRUNT
categories: general
description: Not a comprehensive guide by any means, but my own guide to using GRUNT...
---
## The one off first step

![](/assets/img/uploads/client-logo.png)

Grunt runs off Node.js, so the first thing you need to do is install Node.js on your computer. This is a one off exercise per device.

Go to [nodejs.org/download/](http://nodejs.org/download/), download the package and run the install.

## At the start of each project

Open your preferred editor and create a new file called `package.json` and save this in your project root folder.

Open the empty file and insert...

```
{
    "name": "the-name-of-my-project",
    "version": "0.1.0",
    "devDependencies": {
        "grunt": "~0.4.1"
    }
 }
```

Next, open your Terminal and 'CD' (change directory) to the same project folder e.g 

```
$ cd path/to/my/project-folder
```

(as I'm generally working in Anchor, I CD to my theme folder).

Once you're in the project root folder in terminal, run the command...

```
npm install
```

When I ran this I got the following errors...

![grunt-tutorial-npm-install.png](/images/temp-content/grunt-tutorial-npm-install.png)

However, you can safely ignore them generally as they are errors for the plugin author and shouldn't effect you.

To check that the install has ran correctly, you should now find a new folder in your project root called `node_modules` and inside there you should see a folder called `Grunt`.

Lastly, we'll need to install the 'Grunt Command Line Interface'. This just allows you to use the terminal to run Grunt commands. To do this, in terminal run the command...

```
npm install -g grunt-cli --dev
```

Okay, very important step, close the terminal and reopen to let the changes kick in. I didn't do this and spent a long time trying to figure out if I've done anything wrong. Whenever anything doesn't seem to work the ye olde 'switch it off and switch it back on again' always seems to work.

## Installing modules / tasks

Okay, so the whole purpose of Grunt is to run tasks so next we'll setup grunt to run a few tasks one by one.

We'll setup the following tasks...

* Compile my SASS files into one CSS file and then minify it.
* Compile all my Javascript files into one and minify it.
* Create a task to 'watch out' for any updates and run the tasks so we don't need to manually run the tasks after every SASS & JS change.
* Install 'LiveReload' because I'm super lazy and can't be bothered refreshing the browser all the time.

Create a new file called grunt.js. This is the file where all your Grunt configurations will go. The Grunt file has a structure that is roughly...

1. Main Grunt configuration i.e. tell me where the package.json is located.
2. Configurations for the plugin you want to use
3. Load the plugin into Grunt
4. Register the task so that Grunt runs the plugin when we run Grunt in the terminal 

Which looks like...

```
module.exports = function(grunt) {

    // 1. Main Grunt configuration i.e. tell me where the package.json is located
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //2. Configurations for the plugin you want to use
        example-task: {
            // Config of task
        }

    });

    // 3. Load the plugin into Grunt
    grunt.loadNpmTasks('grunt-example-task');

    // 4. Register the task so that Grunt runs the plugin when we run 'Grunt' in the terminal 
    grunt.registerTask('default', ['example-task']);

};
```

## \#Installing our first task

Let's start with our first task 'Compile my SASS files into one CSS file and then minify it'.

The first thing we'll do is install the sass grunt plugin by opening Terminal, CD to the the project folder and type the following...

```
npm install grunt-contrib-sass --save-dev
```

This one line pulls down all the necessary files for the SASS plugin so you don't need to. Notice the --save-dev, this automatically adds the plugin as a dependancy to your package.json file. Open it up and you'll see that 'grunt-contrib-sass' is there.

Next step, in our empty grunt.js file, paste the following...

```
module.exports = function(grunt) {

    // 1. Main Grunt configuration i.e. tell me where the package.json is located
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      //2. Configurations for the plugin you want to use, in this case SASS
      sass: {
	    dist: {
	        options: {
	            style: 'compressed'
	        },
	        files: {
	            'pathtocssfolder/styles.css': 'pathtosassfolder/mySassFile.scss' // 'destination': 'source'
	        }
	    } 
	},

  });

  // 3. Load the plugin into Grunt
  grunt.loadNpmTasks('grunt-contrib-sass');

  // 4. Register the task so that Grunt runs the plugin when we run 'Grunt' in the terminal 
  grunt.registerTask('default', ['sass']);

};
```

## Watchouts and top tips if it doesn't work

* If you get a 'Unexpected identifier' message, watch out for missing commas.
* Always restart the terminal after you've installed a new plugin via the NPM.

