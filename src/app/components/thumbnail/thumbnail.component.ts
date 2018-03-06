import { TemplateMeta } from './../../models/templateMeta';
import { PathService } from './../../service/path.service';
import { Template } from './../../models/template';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent implements OnInit {
  @Input() templates: Template[] = [];
  @Input() selectedTemplate: Template;
  templateMeta: TemplateMeta[] = [];
  @Output() onChangeTemplate: EventEmitter<Template> = new EventEmitter();
  constructor(public pathService: PathService) { }

  ngOnInit() {
  }

  selectTemplate(template: Template) {
    this.onChangeTemplate.emit(template);
  }

}
