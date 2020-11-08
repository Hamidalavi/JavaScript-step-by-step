# Deploying JavaScript Code

In this course, you will learn about: Deploying JavaScript Application From Development to Production

## First Theory

It's important to understand that there are two main kinds of web application (websites) you could be building. **One** is a website that only consists of the bunch of HTML files, some **JavaScript** and some CSS. This is what we actually worked on for the majority of the course. We didn't have any server-side code there (i.e. any code that needs to be executed outside of the browser of the user). **Two**, But in the **Node.js** section, we did have a look at that, because **Node.js** is a **JavaScript** runtime which allows us to **JavaScript** anywhere, including on a server.

So on a computer which runs somewhere in the web, which users can send request to, but where they don't see the code. So not code that runs in the browser and therefore on the machines of our end users but code that runs on a server we rent, we pay and we put our code on.

Now for server-side code, **Node.js** is not our only solution or our only alternative, we could write this code with PHP or Python and so on.

So these are the two kinds of applications we have, one which **only has client-side code** and one which might **also have client-side code but also has code that needs to run on a server** (like **Node.js**).

**Now in the client-side**, all we need to serve this website (some website) to our users, is a so-called **static host**. This is a web server, a computer configured such that for incoming HttpRequests, it returns the HTML files and the **JavaScript** and the CSS file and maybe any images you're using but that it does run any **JavaScript** code or any server-side code on itself. So put in other words, it'a a machine, it's a computer, somewhere in the Internet with its own IP address attached to it and connected to a domain maybe; which simply does not have **Node.js** installed on it. Instead you just put your files onto that server, configure it briefly to return these files for the incoming requests and you're done.

Speaking about **non-static host**, you could also call this **dynamic host**, you need a dynamic host. You need a computer somewhere in the Internet connected to the Internet in both directions so that it also is able to handle incoming requests, which has in our case here **Node.js** installed on it.

**Now in the sever-side**, we have a web sever which does not just return HTML, CSS and **JavaScript** files to the users. So those files are then handled locally on these user's machines; but which in addition to that, also is capable of running (**JavaScript** code) on the sever itself by simply installing **Node.js** there in the end.

## Deployment Steps

What's the deployment process?

1. It all starts with us **developing**, with us **writing our code**; that's what we did so far throughout the course.
2. We also want to test our code. We want to make sure it's error free it's secure, it has no bugs; that's also what we did throughout this course.
3. Now once we're done with all of that, we can do some optimizations; we can write fallbacks to offer a good browser support, we want to look up the browser support we need. We also use build tools like **Babel** together with **webpack** to optimize and shrink our code and add potential polyfills which we need.
4. Then we can build for production (also with the help of **webpack** - shorten function names and so on).
5. Once we're full happy with the result, we deploy the output; so the built and optimized code, we now take that and put it onto a sever.

**Important**: These all apply to the scenario where we have **client-side JavaScript** code; So code that runs in the browser. For our server-side, our **Node.js** code, the **optimization** and build for **production** part is not that important. Because we ship it on our sever and users never will download this code, it doesn't need to be as small as possible, it can be bigger, it doesn't have to be optimized. Because it's just running on our sever which is super fast typically and we save the time where the code would need to be downloaded.

Specifically, there are three major types you can differentiate:

- Static Websites (just HTML + CSS + **JavaScript**)

- Single-Page-Applications (SPAs, HTML + CSS + **JavaScript** with only one HTML page being served, client-side **JavaScript** is used to re-render the page dynamically)

- Dynamic / Server-side rendered Web Applications: Websites where the HTML pages are created dynamically on the server (e.g. via templating engines like EJS).

When deploying such websites, it's important to understand that sites with **no** server-side code (i.e. Static Websites and SPAs), required only a static host (e.g. AWS S3, Firebase Hosting).

Pages where HTML is generated dynamically on the server require a host that is capable of executing the server-side code (i.e. a server that supports **Node.js**, PHP or whatever language is being used).

You find a more detailed comparison here: <https://academind.com/learn/web-dev/dynamic-vs-static-vs-spa/>
