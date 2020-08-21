# JavaScript Introduction

## What is JavaScript?

**JavaScript** is **dynamic, weakly type** programming language which is **compiled at runtime** (interpreted compiled language). It can be executed as part of a webpage in a browser or directly on any machine (**host environment**).

**JavaScript** was created **to make webpages more dynamic** (e.g. change content on a page directly from inside the browser). Orginally, it was called **LiveScript** but due to the popularity of **Java**, it was renamed to **JavaScript**.

> **Warning**: **JavaScript** is totally independent from **Java** and has nothing in common with **Java**!

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

1. Not pre-compiled, instead parsed and compiled **on the fly** (e.g. in the browser)

2. Code evaluated and executed at runtime

3. Code can change at runtime (e.g. type of a variable)

> Weakly Typed Programming Language:

1. Data types are assumed (e.g. assigned to variables) automatically

2. You don’t define that some variable has to hold a certain value (e.g. a number)

3. Data types are not set in stone but can change