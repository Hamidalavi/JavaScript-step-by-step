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

## Working with Firebase (Example Static Host Deployment (no Server-side Code))

1. First of all, we need to install it from its website or `npm install -g firebase-tools` command. **For MAC and Linux you need to add `sudo` before the `npm`**.

2. Then we need to create a firebase profile (by signing to google account) and then write this `firebase init` command.

3. We can select an option by pressing `space bar` and go to the next level with `return` key (i.e. enter key). (we chose the **Hosting** option).

4. Then we select on a **Create a new project** option and choose a valid name and id for it (you can't change it after creating this project). Then wait it for completion.

5. We choose the path for our public directory (our main path). Then please write `n` for the next question (single-page app).

6. **File root/404.html** already exist. Overwrite? We select `n` (if you don't have this file, press `y` key).

7. After that, we need to write `firebase deploy` command to upload our files to the real web server.

**Note**: This command deploys a **release** to your Firebase project's default Hosting sites:

`projectID.web.app`
`projectID.firebaseapp.com`

## Working with Heroku (Example Dynamic Page Deployment (with Server-side Code))

**Heroku** is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.

- First of all, we need sign up to this website. Then we can login with `heroku login` command in terminal (or cmd) to login into Heroku CLI from our project. This command opens your web browser to the Heroku login page. If your browser is already logged in to Heroku, simply click the `Log in` button displayed on the page.

  **Note**: You need to install Git from <https://git-scm.com/> and add it in your machine. This authentication is required for both the `heroku` and `git` commands to work correctly.

- Now once we are logged in, we can continue with these steps here:

  - `cd my-project/` (or your project folder)
  - `git init` - if you had it before, you don't need to recreate it
  - `heroku git:remote -a js-nodejs-deployment` - this will now basically configure our project here to be deployed as a **Node.js** application to this Heroku application we just created.

- We can create an app on Heroku with `heroku create` command, which prepares Heroku to receive our source code or we can create a new app in Heroku website when we just logged in.

- Then we can push our source code into Heroku with `git add .` -> `git commit -m "our message"` -> `git push heroku main` (or `master`).

**Note1**: If you get an error in this step, to fix this, go to your `package.json` file and add a new script there, you name it `"start"` and then simply write `"node app.js"` here. This in the end will tell the server how it then starts your server.

**Note2**: If it still fails, create a new file in your project, a `Procfile` with no file extension and add `web: node app.js` into it. A `Procfile` file is a file Heroku specifically looks for. After these two steps, you wouldn't get any error.

- After it's done, we are going to the Heroku management page and click on the `More` button and under `More` button, we click on the `Restart all dynos` which basically means restart our server (to make sure that it clearly restarts again).

- If we want to test our application, we get an error because of our port (it's `3000` and it's for local web server), to fix this, we need to change this to `app.listen(process.env.PORT || 3000)` as a main value. What does this do? This looks strange at first, but this uses a system built into **Node.js** called **environment variables**. This in the end, is a placeholder where the concrete value will be injected dynamically by the environment that runs our script. So Heroku can provide its own port where we want to listen instead of that `3000` port which is just there for development.

- Then repeat these steps: `git add .` -> `git commit -m "our message"` -> `git push heroku main` (or `master`).

- We're done, let's Rock!

## Git for You

You can learn more about git commands in [this](https://github.com/Hamidalavi/beginner-git-tips) link.

full link: <https://github.com/Hamidalavi/beginner-git-tips/blob/master/git.md>

## Useful Resources & Links

- Static vs Dynamic vs SPAs: <https://academind.com/learn/web-dev/dynamic-vs-static-vs-spa/>

- Firebase Docs: <https://firebase.google.com/docs/hosting>

- Heroku Docs: <https://devcenter.heroku.com/categories/reference>
