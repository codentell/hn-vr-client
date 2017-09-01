# Welcome to HN Client VR by Andrew Hoang
![picture](https://s3.amazonaws.com/hacker-news/assets/me.gif){:height="500px"}

This is a very fun project to do:

Hacker VR News built it using:
Javascript - single page app  
A-frame - VR experience
AWS S3 bucket - image assets

![picture](https://s3.amazonaws.com/hacker-news/assets/sony.png)
# Features That I added
VR Experience because it was cool




View it now: [https://codentell.github.io/hn-vr-client/](https://codentell.github.io/hn-vr-client/)




# Build a Hacker News Client 
We expect you to spend 1 to 2 hours writing a single page app using only **Vanilla** JavaScript. We are including Babel in this project, so es6 is ok. Please do not add any new dependencies.

Hacker News looks like: [https://news.ycombinator.com/](https://news.ycombinator.com/)

If you aren't familiar with Hacker News, spend a few minutes to see how it works.

Running this app:

Install node:

https://nodejs.org/en/

Open your terminal and:

```
cd hn-vr-client
npm install
npm start
```

The files you add or edit are in the `src` directory.
Then open your browser to [http://localhost:3000](http://localhost:3000)


Notes:

The Hacker News API is defined here [https://github.com/HackerNews/API](https://github.com/HackerNews/API).

### Spec:

General:
- [x] 1) There should be a header with the hacker news icon
- [x] 2) The Hacker News icon should link back to the landing page
- [x] 3) This header should be displayed on all pages
- []  4) Use the browser history API to link to internal pages

Landing Page:
- [x] 1) The landing page should display a list of current top stories
- [x] 2) Each list item should display the link to the story, comments
- [x] 3) When you click the title of the story, it should link and direct you to the story page
- [x] 4) When you click the comments link, it should link you to an in app page displaying all of the comments
- [x] 5) Have a button at the bottom of the landing page to load more stories

Comments Page:

- [] 1) A comments page should list all of the comments for a story
- [] 2) Comments should be able to be collapsable - a parent comment can collapse it's children
- [] 3) Each comment should display its body text



Style points:
- [x] Avoiding UI libraries (e.g. Bootstrap), use your creativity to make the layout pop! Bonus points for using Flexbox.
