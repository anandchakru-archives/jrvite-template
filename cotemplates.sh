#!/bin/bash
cd src/assets/
rm -rf a2sample/
git init a2sample
cd a2sample/
git remote add origin https://github.com/anandchakru/a2sample.git
git config core.sparsecheckout true
echo "templates/*" > .git/info/sparse-checkout
echo "lib/*" >> .git/info/sparse-checkout
git pull --depth=1 origin master