backbone-node
=============

An iteration on my previous rails-backbone-bootstrap repository. This repo started with backboneboilerplate, created
by thomasdavis [https://github.com/thomasdavis/backboneboilerplate]. However, I built this POC with my fork of his
repository [backboneboilerplate] since my fork upgrades the js libraries to the latest versions [i.e. backbone.js
1.0.0]. In this POC I also removed 960.gs and a bunch of the bloat that was unused in the original backboneboilerplate
repo. I still have some cleanup to do, but what has resulted is a nice little POC for people to learn with.

This repo uses backbone.js, node.js [via Express.js], underscore.js, require.js, twitter-bootstrap, and the public
GitHub API. Currently, this POC will only pull the latest Rails repo issues and allow users to click on the individual
issues to view more details.

To-Do
=============
 - move some code to templates
 - add in comments on individual issues
 - add paging
 - allow users to specify with repo they want to view rather than have Rails hardcoded
 - better documentation


To Run
=============
 - Run: node build/server
 - Open: http://localhost:1337

 You may need to install Express.js if it is not already installed
 - Run: npm install express




More documentation and development to come. Stay tuned!