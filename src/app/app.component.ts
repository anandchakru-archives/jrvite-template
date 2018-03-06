import { GithubService } from './service/github.service';
import { Template } from './models/template';
import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { isDevMode } from '@angular/core';
import * as jquery from 'jquery';
import * as Mustache from 'mustache';
import * as marked from 'marked';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  templates: Template[] = [];
  selectedTemplate: Template;

  constructor(private ghService: GithubService) {
    marked.setOptions({ breaks: true });
  }
  ngOnInit() {
    this.ghService.fetchTemplates().subscribe((rsp: Template[]) => {
      this.templates = rsp;
      this.selectedTemplate = this.templates[0];
    });
  }
  data(): any {
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