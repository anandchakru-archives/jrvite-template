import { Http } from '@angular/http';
import { TemplateMeta } from './../models/templateMeta';
import { Template } from './../models/template';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

@Injectable()
export class PathService {
  private token: string = '?' + new Date().getTime();
  constructor(private http: Http) { }
  getIndex(template: Template): string {
    let t = 'assets/template/' + template.name + '/index.html' + this.token;
    return t;
  }

  getThumb(template: Template): string {
    let t = 'assets/template/' + template.name + '/ss.png' + this.token;
    return t;
  }

}
