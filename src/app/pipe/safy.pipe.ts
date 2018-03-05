import { DomSanitizer } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'safy'
})
export class SafyPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(value: any, args?: any): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }
}