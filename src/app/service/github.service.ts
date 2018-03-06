import { Template } from './../models/template';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class GithubService {
  public templateListSub: ReplaySubject<Template[]> = new ReplaySubject<Template[]>(1);
  constructor(private http: Http) {
    this.http.get('https://api.github.com/repos/anandchakru/jrvite-template/contents/src/assets/template?ref=master').map((res) => {
      return res.json();
    }).catch((error: any) => {
      console.log(JSON.stringify(error));
      return Observable.throw(error);
    }).subscribe((rsp) => {
      this.templateListSub.next(rsp);
    });
  }
}
