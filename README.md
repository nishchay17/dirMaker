### *Now you can open vscode directly from this

## What is this?
CDF is faster way to make dir with template file, for competitive programmers, from CMD

## Installation
Make sure you have node installed, then run

	npm i @nishchay17/cdf -g --save

## How to use

    rootdir/where/you/want/to/make/dir> cdf -r
   This sets the current folder as the root folder, make your cp folder as root folder.
   
	dir/where/you/have/your/template> cdf -t	
cdf will look in this folder for your template, make sure you have "template.txt" here.

	anywhere> cdf -d <name> -n <number>
```javascript
//default value of <number> is 4
//so this could also be used as
> cdf -d <name>
//this will create 4 files, by default
```
	
This command will create folder named  `<name>`  in your root folder, with `<number>` amount of files inside it, having your template. 

If you are using other language than cpp, use the given command to change the default language.

    anywhere> cdf -d <name> -n <number> -l <lang>
```javascript
//<lang> could be 
//py for pythan
//java for java
//c for c
//cpp for c++
```

## Example video

[![video](https://img.youtube.com/vi/0qWTSaXbRaU/0.jpg)](https://www.youtube.com/watch?v=0qWTSaXbRaU)
