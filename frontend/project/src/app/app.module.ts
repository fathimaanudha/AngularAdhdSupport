import { BrowserModule } from '@angular/platform-browser';
import "@angular/compiler";
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpHandler, HttpEvent} from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule,MatDialogRef} from "@angular/material/dialog";
import {MatNativeDateModule} from '@angular/material/core';
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { YouTubePlayerModule } from "@angular/youtube-player";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CquizComponent } from './cquiz/cquiz.component';
import { MatCardModule } from '@angular/material/card';
import { CwelcomeComponent } from './cwelcome/cwelcome.component';
import { ArticlesComponent } from './articles/articles.component';
import { ClickOutsideModule } from 'ng-click-outside';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {ChatService} from './services/chat.service'
import {QuizService} from './services/quiz.service';
import { NewAComponent } from './new-a/new-a.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { ArticleComponent } from './article/article.component';
import { ContentComponent } from './content/content.component';
import { NewSolComponent } from './new-sol/new-sol.component';
import { SolutionComponent } from './solution/solution.component';
import { SolContentComponent } from './sol-content/sol-content.component';
import {AuthService} from './services/auth.service';
import {TokenInterceptorService} from './services/token-interceptor.service';
import {ArticlesService} from './services/articles.service';
import {SolutionsService} from './services/solutions.service'
import {PvalidatorService} from './services/pvalidator.service';
import { VideosComponent } from './videos/videos.component';
import { AddvidComponent } from './addvid/addvid.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuizdilogComponent } from './quizdilog/quizdilog.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatboxComponent,
    HeaderComponent,
    HomeComponent,
    CquizComponent,
    CwelcomeComponent,
    ArticlesComponent,
    SignupComponent,
    LoginComponent,
    NewAComponent,
    SolutionsComponent,
    CourseDialogComponent,
    ArticleComponent,
    ContentComponent,
    NewSolComponent,
    SolutionComponent,
    SolContentComponent,
    VideosComponent,
    AddvidComponent,
    QuizdilogComponent,
    NotificationComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    YouTubePlayerModule,
    NgbModule,
    MatSidenavModule,
    ClickOutsideModule

   
  ],
  providers: [ChatService,QuizService,SolutionsService,ArticlesService,AuthService,,PvalidatorService,
    {
      provide: MatDialogRef,
      useValue: {}
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi:true
    }],
  bootstrap: [AppComponent],
  entryComponents: [CourseDialogComponent],
  
  
})
export class AppModule { }
