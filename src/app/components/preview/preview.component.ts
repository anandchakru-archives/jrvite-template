import { GithubService } from './../../service/github.service';
import { Template } from './../../models/template';
import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import * as jquery from 'jquery';
import * as Mustache from 'mustache';
import * as marked from 'marked';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  selectedTemplate: Template;
  templates: Template[] = [];
  @ViewChild('ifr') ifr: ElementRef;
  constructor(private ghService: GithubService,
    public sanitizer: DomSanitizer) {
    marked.setOptions({ breaks: true });
  }

  ngOnInit() {
    this.ghService.fetchTemplates().subscribe((rsp: Template[]) => {
      this.templates = rsp;
      this.selectedTemplate = this.templates[0];
    });
  }
  getMasterIndex(template: Template): string {
    let t = 'assets/a2sample/templates/' + template.name + '/index.html';
    return t;
  }
  getParentUrl() {
    var url = document.createElement('a'); url.setAttribute('href', window.location.href);
    return url.protocol + "//" + url.hostname + (url.port ? ":" + url.port : "");
  }
  @HostListener("window:message", ["$event"])
  iframeLoaded(event: MessageEvent) {
    if (event.data && event.data.messageId && event.data.messageId === 'template') {
      if (this.ifr.nativeElement.contentWindow.designChild && this.ifr.nativeElement.contentWindow.designChild.onTemplateComplete) {
        this.ifr.nativeElement.contentWindow.designChild.onTemplateComplete(Mustache.render(event.data.details.content, this.data()));
      }
    } else if (event.data && event.data.messageId && event.data.messageId == 'resource404') {
      console.log('404: ' + JSON.stringify(event.data.details));
    } else if (event.data && event.data.messageId && event.data.messageId === 'templateApplied') {
      this.ifr.nativeElement.style.opacity = 1;
    }
  }
  private data(): any {
    return {
      invite: {
        title: "Someones's 4th Birthday",
        hostName: "Somebody family",
        addrText: "9415, Alcosta blvd, San Ramon, CA 94583",
        timeFromStr: "Feb 24, 2018 08:00 AM PST",
        timeToStr: "Feb 24, 2018 04:00 PM PST",
        shortMsg: "Inviting all our friends",
        inviteNote: marked(
          "## Party time!\nBalloons go up, candles blow *out*,\nkids all around jump and *shout*\nThe date draws near and we want you *hear*,\nto celebrate Someone's 4th *year*!"
        ),
        photos: [{ url: "https://picsum.photos/1200/630/?random" }]
      }
    };
  }
}
