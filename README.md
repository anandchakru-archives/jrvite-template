# jrvite-templates

```
ng new jrvite-templates --style=scss
npm install --save bootstrap jquery mustache marked
npm install --saveDev @types/mustache
```

Sparse (only template dir) & Shallow checkout (skip history info) from github

```
cd 
git init <repo>
cd <repo>
git remote add origin <url>
git config core.sparsecheckout true
echo "finisht/*" >> .git/info/sparse-checkout
git pull --depth=1 origin master
```