import { Component, OnInit } from '@angular/core';
import { StudentSystemServiceService } from './../student-system-service.service';

import {NgForm} from '@angular/forms';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import { HttpClient } from '@angular/common/http';
//import {HttpClientModule} from '@angular/common/http';
//import { HttpErrorResponse } from '@angular/common/https';

//import {ImageCropperComponent, CropperSettings} from 'ng2-img-cropper';


//import studentList.ts;
import newStudent.ts;


@Component({
  selector: 'app-lazy-studentoverview',
  templateUrl: './lazy-studentoverview.component.html',
  styleUrls: ['./lazy-studentoverview.component.css']
})
export class LazyStudentoverviewComponent implements OnInit {

  constructor(private _StudentSystemServiceService: StudentSystemServiceService, private httpClient: HttpClient) {}


	public loggedInUser: string;

//	public studentsPeristant = [];
//  	public studentsPeristant:studentList = [];
  	public studentsPeristant = [];


	public subjectsArray = [];
	public first_name: string;
	public last_name: string;
	public studentCardNumberS: string;
 	public toggleDispalyStudentEdit = false;

	public toggleColoradoLine = false;

	
	public firstName: string;
	public lastName: string;
	public studentDescriptionS: string;

	public selectedFile:File = null;

	public studentsFetchs= [];

 	public currentEdit = [];

	public currentSubjects = [];

	public studentsInput = [];
	//public addStudnetData: any = [];
	//public addStudnetData:newStudent = {};
	public addStudnetData = {};


       public students:studentList;


  ngOnInit() {


		/*	token expiration function execution needs to be triggered soon after the user log's in. Cause of angular services does not persist data and lazy student is the only auth resource should simulate here */

		this._StudentSystemServiceService.tokenExipreTime(600000);

		this.loggedInUser =this._StudentSystemServiceService.loggedInUser();
	//		this.studentsPeristant = this._StudentSystemServiceService.studentsRetrieve();
	this.studentsRetrieve();
	this.toggleDispalyStudentEdit = true;
	this.toggleColoradoLine = true;

  }







coloradoLime(classname){
	console.log('colorado');		 
   document.getElementById('coloradoLime').classList.add(classname);
	  setTimeout(function(){  document.getElementById('coloradoLime').classList.remove(classname); }, 450); 
}/* end of coloradoLime function */




	toggleSwitch(student){
			this.toggleDispalyStudentEdit = true;

		
		this.subjectsArray = this.currentSubjects;
		//	this.subjectsArray = this.currentSubjectsFirstName['subjects'];
	}/* end of toggleSwitch function */



subjectsAdd(data){
		
		this.coloradoLime('coloradoLime');
		
		//exist = "a";
		this.subjectsArray.filter(function(value){ 
				if(value == data) { 
				confirm('already exist');
				 var exist = "true";
				
		}
		});
		//if(exist =="true"){ confirm('true');}
		
		this.subjectsArray.push(data);
		
		 	
		//console.log(this.subjectsArray);
		
	} /* end of subjects function */



	removeSubject(data){
		this.coloradoLime('coloradoLimegreen');
		//this.subjectsArray.push(data); 
		this.subjectsArray = this.subjectsArray.filter(function(value) { return value !== data });

	}/* end of removeSubject function */






	overview(student){
		//	this.toggleDispalyStudentEdit = true;
	
				this.firstName = student['first_name'];
				this.lastName = student['last_name'];
				this.studentCardNumberS = student['studentCardNumber'];

				this.subjectsArray = student['subjects'];

				this.studentDescriptionS = student['studentDescription'];

	}/* end of overview function */



	studentEdit(student) {

				this.currentEdit = student;

			

			

			  this.toggleDispalyStudentEdit = false;
				this.firstName = student['first_name'];
				this.lastName = student['last_name'];
			  this.studentCardNumber = student['studentCardNumber'];
				this.studentDescription = student['studentDescription'];

				this.subjectsArray = student['subjects'];
				this.currentSubjects = this.subjectsArray;
			

	//	this._StudentSystemServiceService.studentEditService();
	} /* end of a studentEdit function */ 
	


	studentDelete(student){
	confirm('studentDelete');
		this.studentsPeristant = this.studentsPeristant.filter(function(value) { 		
					return value !== student 
		});
	


	 this._StudentSystemServiceService.studentDeleteService(student);
	return this.studentsPeristant;
		//this.studentsRetrieve();
	}/* end of a studentDelete function */



	studentSaveSubjects(student){
	
		  this.toggleDispalyStudentEdit = true;
		
	  	let check = this.currentEdit;
		  let changedSubjects = JSON.parse(JSON.stringify(this.subjectsArray));

				this.studentsPeristant.filter(function(value) { 

						if(value == check){
							value['subjects'] = changedSubjects;
						} /* end of a value == check function */

			});

	}/* end of a saveSubjects function */



	
	addStudent(data){

		this.addStudnetData["first_name"] = data["first_name"];
		this.addStudnetData["last_name"] = data["last_name"];
					/* later on */
					let studentCardNumber= data["studentCardNumber"];
					let studentCardNumberS = studentCardNumber.toString();
	 	this.addStudnetData["studentCardNumber"] = studentCardNumberS;
		this.addStudnetData["studentDescription"] = data['studentDescription'];
		this.addStudnetData["subjects"] = this.subjectsArray;

				/* service api */
		this.studentsPeristant = this._StudentSystemServiceService.addStudentuser(this.addStudnetData);

				/*	rxjs later on */
	//this.studentsPeristant  = this._StudentSystemServiceService.studentsRetrieve();
	//	return this.studentsRetrieve();
		
		//window.location = "/lazy/studentoverview";

	} /* end of addStudent function */






	studentsRetrieve(){
		this.studentsPeristant  = this._StudentSystemServiceService.studentsRetrieve();
		return this.studentsPeristant;			
	
	} /* end of studentsRetrieve function */



	logout(){
		localStorage.setItem("token", null);
		localStorage.setItem("loggedUserEmail", null);
		window.location = "/login";
	} /* end of logout function */



	
	/*	img upload */

	onFileSelect(event){
		this.selectedFile = <File>event.target.files[0];
	}/* end of onFileSelect function */


	onUpload(){
		const fd = new FormData();		/* name reference*/
		fd.append('image', this.selectedFile, this.selectedFile);
	}/* end of onUpload function */




	imageChangedEvent: any = '';
	croppedImage: any = '';

	fileChangeEvent(event: any): void {
	    this.imageChangedEvent = event;
	}
	imageCropped(event: ImageCroppedEvent) {
	    this.croppedImage = event.base64;
	}
	imageLoaded() {
	    // show cropper
	}
	loadImageFailed() {
	    // show message
	}














}
