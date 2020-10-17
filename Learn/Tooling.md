# JavaScript Tooling (Webpack, Babel and etc.)

In this course, you will learn about: Tooling

## Project Limitations & Why We Need Tools

If we use less whitespaces and shorter function name like A B C D, the size of file will be decreased and the page will load faster. **But** it's very hard to understand for us (humans).

Project Limitations:

- Micromanagement of Imports **or** Lots of Unnecessary Http Requests
- Unoptimized Code (not as small as possible)
- Potentially sub-optimal Browser Support
- Need to Reload Page Manually (after changes to code)
- Code Quality Is Not Checked

How to solve those issues:

|Name|Purpose|What is does|
|:-:|:-:|:-:|
|**webpack-dev-server** or **serve**|A Development Server|Serve under  (more) realistic circumstances, auto-reload|
|Webpack|Bundling Tool|Combine multiple files into bundled code (less files)|
|Webpack Optimizer Plugins|Code Optimization Tool|Optimize code (shorten function names, remove whitespace, ...)|
|Babel|Code Compilation Tool|Write modern code, get **older** code as output|
|ESLint|Code Quality Checker|Check code quality, check for conventions & patterns|

## Workflow

> Overview:

|During Development (upon **Save**)|npm & NodeJS|For Production (upon Command)|
|:-:|:-:|:-:|
|Linting (ESLint)||Linting (ESLint)|
|Bundling (Webpack)||Bundling (Webpack)|
|Reload Dev Server|Installed globally|Compilation (Babel)|
|-||Optimization|
|-||Production-ready Code|

First of all, we need to create a node package for our project. To do this, we must install nodeJS (app) and `npm` packages. Then inside it, we write the `npm init` into it:

```json
{
  "name": "project-board",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Hamid Alavi",
  "license": "ISC"
}
```
