import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';



//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StudentSystemComponent } from './student-system/student-system.component';






import { RouterModule, Routes } from '@angular/router';
import { StudentOverviewComponent } from './student-overview/student-overview.component';


import {NgxPaginationModule} from 'ngx-pagination';



import { AuthGuard } from './auth-guard.service';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
/*  { path: 'studentsystem', component: StudentSystemComponent }, */
/*  { path: 'studentoverview', component: StudentOverviewComponent, canActivate: [AuthGuard] }, */
  { path: 'lazy', loadChildren: './lazy.module#LazyModule', canActivate: [AuthGuard] },
  { path: '**', component: LoginComponent }
];




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentSystemComponent,
    StudentOverviewComponent
  ],
  imports: [
    BrowserModule,
   // AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forRoot(
    appRoutes,
    //  { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
