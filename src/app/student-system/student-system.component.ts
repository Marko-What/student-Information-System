import { Component, OnInit } from '@angular/core';

import {NgForm} from '@angular/forms';
import { StudentSystemServiceService } from './../student-system-service.service';

import { FormGroup, FormControl, Validators} from '@angular/forms';



@Component({
  selector: 'app-student-system',
  templateUrl: './student-system.component.html',
  styleUrls: ['./student-system.component.css']
})
export class StudentSystemComponent implements OnInit {

  constructor(private _StudentSystemServiceService: StudentSystemServiceService) { }

			public subjectsArray = [];
			public studentsInput = [];
			public addStudnetData = [];
			public addStudnetData;


  ngOnInit() {
  }




	subjectsAdd(data){
	
		this.subjectsArray.push(data); 
		
		console.log(this.subjectsArray);
		
	} /* end of subjects function */



	removeSubject(data){
					
		this.subjectsArray.push(data); 

		this.subjectsArray = this.subjectsArray.filter(function(value) { return value !== data });

		console.log(this.subjectsArray); 

		
	} /* end of subjects function */



		addStudent(data){

				confirm('wauwa');
		
		
	
		this.addStudnetData["first_name"] = data["first_name"];
		this.addStudnetData["last_name"] = data["last_name"];
		this.addStudnetData["year"] = data["year"];
		this.addStudnetData["subjects"] = this.subjectsArray;

		//	console.log(this.addStudnetData);	


		this._StudentSystemServiceService.addStudentuser(this.addStudnetData);

	} /* end of addStudent function */






}
