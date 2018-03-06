import { PathService } from './service/path.service';
import { BsEventsService } from './service/bs-events.service';
import { GithubService } from './service/github.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SafyPipe } from './pipe/safy.pipe';
import { PreviewComponent } from './components/preview/preview.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { RouterModule, Routes } from '@angular/router';

const AppRoutes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    SafyPipe,
    PreviewComponent,
    ThumbnailComponent
  ],
  imports: [
    RouterModule.forRoot(AppRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GithubService, BsEventsService, PathService],
  bootstrap: [AppComponent]
})
export class AppModule { }
