import { PathService } from './../../service/path.service';
import { GithubService } from './../../service/github.service';
import { Template } from './../../models/template';
import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit, HostListener, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  @Input() selectedTemplate: Template;
  @Input() details: any = {};
  @ViewChild('ifr') ifr: ElementRef;
  constructor(private ghService: GithubService,
    public pathService: PathService,
    public sanitizer: DomSanitizer) {
  }

  ngOnInit() { }

  @HostListener("window:message", ["$event"])
  iframeLoaded(event: MessageEvent) {
    if (event.data && event.data.messageId && event.data.messageId === 'template') {
      if (this.ifr.nativeElement.contentWindow.designChild && this.ifr.nativeElement.contentWindow.designChild.onTemplateComplete) {
        this.ifr.nativeElement.contentWindow.designChild.onTemplateComplete(Mustache.render(event.data.details.content, this.details));
      }
    } else if (event.data && event.data.messageId && event.data.messageId == 'resource404') {
      console.log('404: ' + JSON.stringify(event.data.details));
    } else if (event.data && event.data.messageId && event.data.messageId === 'templateApplied') {
      this.ifr.nativeElement.style.opacity = 1;
    }
  }
}
