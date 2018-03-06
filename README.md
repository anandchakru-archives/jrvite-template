# jrvite-templates

Angular application to test & design templates for [jrvite](http://jrvite.com). 

Status: work in progress.

## How to download and setup:
- Clone the repo
```
git clone https://github.com/anandchakru/jrvite-template.git && cd jrvite-template
npm install
ng run s
```
- Go to http://localhost:4200

## Init
Initialized with the following angular-cli commands
```
ng new jrvite-templates --style=scss
npm install --save bootstrap jquery mustache marked
npm install --saveDev @types/mustache
```

## Sparse (only templates) & Shallow checkout (skip history info) from github

```
git init jrvite-template && cd jrvite-template
git remote add origin https://github.com/anandchakru/jrvite-template.git
git config core.sparsecheckout true
echo "src/assets/template/*" > .git/info/sparse-checkout
echo "src/assets/template-lib/*" >> .git/info/sparse-checkout
echo "src/assets/shared/*" >> .git/info/sparse-checkout
git pull --depth=1 origin master

```