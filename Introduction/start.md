# JavaScript Introduction

## What is JavaScript?

**JavaScript** is **dynamic, weakly type** programming language which is **compiled at runtime** (interpreted compiled language). It can be executed as part of a webpage in a browser or directly on any machine (**host environment**).

**JavaScript** was created **to make webpages more dynamic** (e.g. change content on a page directly from inside the browser). Orginally, it was called **LiveScript** but due to the popularity of **Java**, it was renamed to **JavaScript**.

> **Warning**: **JavaScript** is totally independent from **Java** and has nothing in common with **Java**! Because:

- **Java** doesn't (can't) run in a browser.

- **Java** is an object-oriented and strongly type language.

- All syntax, concepts, core features, and etc in **JavaScript** environments are same.

## How Do Webpages Work?

![webpage work](https://media.geeksforgeeks.org/wp-content/uploads/Web_Servers_work_1.png)

When someone (user) visit and interact the **Client** (browser), a **request** is sent to the server, where HTML file is hosted and send back **reponse** to the client (if user doing something like clicking a button or loading a web page). In this way, **JavaScript** makes this more **reactive**.

## How Is JavaScript Executed?

When you write your **JavaScript** code and you want it to have some effect on the web page, if we talk about the browser as the environment where we run our script. The you have on important thing built into any environment where you want to run **JavaScript** code and that's a **JavaScript engine**. It's built into the browser as we said. For example, in the chrome browser, it's **v8**, that's the name of the engine. In firefox the name would be **spider monkey**. Other browsers also either reuse these engines or have their own engine.

The job of **engine** is to parse your **JavaScript** code (parse, read and understand), then compile it to machine code. Because machine code executes faster, so it (machine) reads your code but it does not necessarily execute it like that; but instead, it now takes that code and compiles it to code which is faster to execute by the machine and then it executes that machine. Then when that code is executed, we have that effect on our web page.

The browser built-in tool do some jobs: takes our code, compile it, optimize it and executes it. All of that happens on a **single thread**.

**Q**: What is single thread mean?

**Answer**: **Javascript** is a single threaded language. This means it has one call stack and one memory heap. As expected, it executes code in order and must finish executing a piece code before moving onto the next.

## What are Dynamic and Weakly Type Mean?

> Dynamic, interpreted Programming Language:

1. Not pre-compiled, instead parsed and compiled **on the fly** (e.g. in the browser).

2. Code evaluated and executed at runtime.

3. Code can change at runtime (e.g. type of a variable).

> Weakly Typed Programming Language:

1. Data types are assumed (e.g. assigned to variables) automatically.

2. You don’t define that some variable has to hold a certain value (e.g. a number).

3. Data types are not set in stone but can change.

## JavaScript Runs On A Host Environment

What is it mean? It means that we can use **JavaScript** in **Browser-side** and **Other-side** (e.g.server-side).

> in browser-side:

- **JavaScript** was invented to create more dynamic websites by executing in the browser! That's the origin of **JavaScript**.

- **JavaScript** can manipulate the HTML code, CSS, send background Http requests and allows interaction with web page and browser APIs (e.g. get user location) & much more.

- **JavaScript** can't access the local filesystem (interact with the operating system etc.).

> in other-side (e.g. server-side like Node.js):

- Google’s **JavaScript** Engine (V8) extracted to run **JavaScript** anywhere (called **Node.js**).

- **Node.js** can be executed on any machine and is therefore often used to build web backends (server-side **JavaScript**).

- **Node.js** **can** access the local filesystem, interact with the operating system etc. It **can't** manipulate HTML or CSS.

## What will you learn in this course?

There are **three** levels of learning in this course:

> Core Basics:

- Language Basics
- Base Syntax
- Efficient Development & Debugging
- Control Structures (conditions, loops and etc.)
- Compiling in **JavaScript**
- Fuctions
- **D**ocument **O**bject **M**odel (DOM) Bascics
- Arrays & Iterables
- Objects

> Building a Strong Foundation:

- Classes & **O**bject-**O**riented **P**rogramming (OOP)
- Constructor Functions & Prototypes
- More about DOM & Browser
- APIs
- Events (like mouse click, hover and etc.)
- More about Functions
- More about Numbers & Strings
- Asynchronous Code
- Background Http (Ajax)

> Advanced Concepts:

- Third Party Libraries
- **JavaScript** Modules Tooling (Webpack, Babel and etc.)
- Working with Browser Storage
- Browser Support
- **JavaScript** Frameworks
- Meta-programming
- NodeJS Introduction
- Security
- Deployment
- Performance Optimizations & Memory Leaks

## History of JavaScript

|Year|Description|
|:-:|:-:|:-:|
|1995|Netscape introduces **LiveScript** / **JavaScript**|
|1996|Microsoft releases its own version for IE|
|Late 1996|**JavaScript** submitted to ECMA International to start standardization|
|1997 - 2005|Standardization efforts, Microsoft didn’t really join and support the standardized **JavaScript** version though|
|2006 - 2011|Huge progress in JavaScript ecosystem, Microsoft eventually joined forces|

> **Note**: ECMA = European Computer Manufacturers Association
