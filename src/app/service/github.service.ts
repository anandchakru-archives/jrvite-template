import { Template } from './../models/template';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GithubService {

  public templateListSub: ReplaySubject<Template[]> = new ReplaySubject<Template[]>(1);
  constructor(private http: Http) {
    this.fetchTemplates().subscribe((rsp) => {
      this.templateListSub.next(rsp);
    });
  }
  fetchTemplates(): Observable<any> {
    if (!this.templateListSub.observers.length) { //if template not fetched, fetch them
      return this.http.get('https://api.github.com/repositories/82734860/contents/templates').map((res) => {
        return res.json();
      }).catch((error: any) => {
        console.log(JSON.stringify(error));
        return Observable.throw(error);
      });
    } else {
      this.templateListSub;
    }
  }
}
