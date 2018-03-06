export class Template {
  name: string;
  path: string;
  sha: string;
  url: string;
  html_url: string;
  type: string;     //  "dir" | "file"
}
/*
eg:
    {
      "name": "index.html",
      "path": "templates/princess/index.html",
      "sha": "6455687a5133b94a3dc5e21e600d8e79d080d6c3",
      "size": 247,
      "url": "https://api.github.com/repos/anandchakru/a2sample/contents/templates/princess/index.html?ref=master",
      "html_url": "https://github.com/anandchakru/a2sample/blob/master/templates/princess/index.html",
      "git_url": "https://api.github.com/repos/anandchakru/a2sample/git/blobs/6455687a5133b94a3dc5e21e600d8e79d080d6c3",
      "download_url": "https://raw.githubusercontent.com/anandchakru/a2sample/master/templates/princess/index.html",
      "type": "file",
      "_links": {
        "self": "https://api.github.com/repos/anandchakru/a2sample/contents/templates/princess/index.html?ref=master",
        "git": "https://api.github.com/repos/anandchakru/a2sample/git/blobs/6455687a5133b94a3dc5e21e600d8e79d080d6c3",
        "html": "https://github.com/anandchakru/a2sample/blob/master/templates/princess/index.html"
      }
    }
*/