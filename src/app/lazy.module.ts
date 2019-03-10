import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { LazyStudentoverviewComponent } from './lazy-studentoverview/lazy-studentoverview.component';

import { FormsModule } from '@angular/forms';

import {NgxPaginationModule} from 'ngx-pagination';


import { Routes, RouterModule } from '@angular/router';
import { ImageCropperModule } from 'ngx-image-cropper';


const routes: Routes = [
	{ path:'studentoverview', component: LazyStudentoverviewComponent }
];


@NgModule({
  declarations: [LazyStudentoverviewComponent],
  imports: [
     CommonModule,
     RouterModule.forChild(routes),
     NgxPaginationModule,
     FormsModule,
     HttpClientModule,
		 ImageCropperModule
  ]
})
export class LazyModule { }
