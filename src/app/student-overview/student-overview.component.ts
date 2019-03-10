import { Component, OnInit } from '@angular/core';

import { StudentSystemServiceService } from './../student-system-service.service';


@Component({
  selector: 'app-student-overview',
  templateUrl: './student-overview.component.html',
  styleUrls: ['./student-overview.component.css']
})
export class StudentOverviewComponent implements OnInit {

  constructor(private _StudentSystemServiceService: StudentSystemServiceService) { }

	public studentsPeristant = [];
	public subjectsArray = [];
	public first_name = "";
  public last_name = "";
  public years = "";
  public toggleDispalyStudentEdit = false;



  ngOnInit() {

		this.studentsPeristant = this._StudentSystemServiceService.studentsRetrieve();
		
	this.toggleDispalyStudentEdit = true;
		console.log(this.toggleDispalyStudentEdit);
  }



subjectsAdd(data){
	
		this.subjectsArray.push(data); 
		
		console.log(this.subjectsArray);
		
	} /* end of subjects function */



	removeSubject(data){
	
		this.subjectsArray.push(data); 

		this.subjectsArray = this.subjectsArray.filter(function(value) { return value !== data });

		console.log(this.subjectsArray); 

}/* end of removeSubject function */


	toggleSwitch(){
			this.toggleDispalyStudentEdit = true;
		

	}/* end of toggleSwitch function */




	overview(student){
		//	this.toggleDispalyStudentEdit = true;
		
				this.first_name = student['first_name'];
				this.last_name = student['last_name'];
				this.years = student['year'];
				this.subjectsArray = student['subjects'];

	}/* end of overview function */




	studentEdit(student) {
	
			//console.log(student['first_name']);
				this.toggleDispalyStudentEdit = false;
				this.first_name = student['first_name'];
				this.last_name = student['last_name'];
				this.years = student['year'];
				this.subjectsArray = student['subjects'];
	//confirm('studentEdit');
	//	this._StudentSystemServiceService.studentEditService();
	} /* end of a studentEdit function */ 
	







	studentDelete(student){
		console.log(student);

	//	this.subjectsArray.push(data); 

		this.studentsPeristant = this.studentsPeristant.filter(function(value) { return value !== student });

		console.log(this.studentsPeristant); 


	//	this._StudentSystemServiceService.studentDeleteService();
	}/* end of a studentDelete function */



studentSaveSubjects(student){
	confirm('studentSaveSubjects');
		//console.log(student);

	this.studentsPeristant.filter(function(value) { 
	
			if(value == student){
				 value.subjects = "CHANGED";
			} 

	});
//this.studentsPeristant  = this._StudentSystemServiceService.studentsRetrieve();
		console.log(this.studentsPeristant); 


	//this.subjectsArray;
	//this.studentsPeristant
	

		//console.log(this.studentsPeristant);
	}/* end of a saveSubjects function */


	

}
