import { BsEventsService } from './service/bs-events.service';
import { Subject, Observable, Subscription } from 'rxjs';

import { GithubService } from './service/github.service';
import { Template } from './models/template';
import { Component, OnInit, OnDestroy, HostListener, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { isDevMode } from '@angular/core';
import * as jquery from 'jquery';
import * as Mustache from 'mustache';
import * as marked from 'marked';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  templates: Template[] = [];
  selectedTemplate: Template;
  details: any = {};

  private onCllapsibleShownSubject: Subscription;
  private onCllapsibleHiddenSubject: Subscription;

  activeSection: string = 'preview';//thumbs|details

  @ViewChild('closeThumb') closeThumb: ElementRef;
  constructor(private ghService: GithubService,
    private route: ActivatedRoute,
    private bsEventsService: BsEventsService) {
    marked.setOptions({ breaks: true });
    this.details = {
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
        //photos: [{ url: "http://lorempixel.com/g/400/200" }]
      }
    };
  }
  ngOnInit() {
    this.ghService.templateListSub.subscribe((rsp: Template[]) => {
      this.templates = rsp;
      this.route.queryParams.subscribe(params => {
        let selectedTemplateIndx = params['templateName'] || '0';
        this.selectedTemplate = this.templates[selectedTemplateIndx] || this.templates[0];
      });
    });
    this.onCllapsibleShownSubject = this.bsEventsService.onCollapsibleShown().subscribe((event: any) => {
      this.activeSection = event.target.id;
    });
    this.onCllapsibleHiddenSubject = this.bsEventsService.onCollapsibleHidden().subscribe((event: any) => {
      this.activeSection = 'preview';
    });
  }
  ngOnDestroy() {
    this.onCllapsibleShownSubject.unsubscribe();
    this.onCllapsibleHiddenSubject.unsubscribe();
  }
  updateDetails(details): any {
    this.details = details;
  }
  changeTemplate(template) {
    this.selectedTemplate = template;
    this.closeThumb.nativeElement.click();
  }
}