import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CquizComponent } from './cquiz/cquiz.component';
import { CwelcomeComponent } from './cwelcome/cwelcome.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { ArticlesComponent } from './articles/articles.component';
import { AuthGuard } from './auth.guard';

import { NewAComponent } from './new-a/new-a.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { ArticleComponent } from './article/article.component';
import { ContentComponent } from './content/content.component';
import { NewSolComponent } from './new-sol/new-sol.component';
import { SolutionComponent } from './solution/solution.component';
import { SolContentComponent } from './sol-content/sol-content.component';
import { VideosComponent } from './videos/videos.component';
import { AddvidComponent } from './addvid/addvid.component';
import { NotificationComponent } from './notification/notification.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'cquiz',component:CquizComponent},
  {path:'cwelcome',component:CwelcomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'chat',component:ChatboxComponent},
  {path:'articles',component:ArticlesComponent},
  {path:'articles/:id',component:ArticleComponent},
  {path:'article/new',component:NewAComponent,canActivate: [AuthGuard]},
  {path:'articles/contents/:id',component:ContentComponent,canActivate: [AuthGuard]},
  {path:'solutions/contents/:id',component:SolContentComponent,canActivate: [AuthGuard]},
  {path:'videos',component:VideosComponent},
  {path:'solutions',component:SolutionsComponent},
  {path:'solution/new',component:NewSolComponent,canActivate: [AuthGuard]},
  {path:'solution/:id',component:SolutionComponent},
  // {path:'notifications',component:NotificationComponent},
  {path:'video/new',component:AddvidComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
