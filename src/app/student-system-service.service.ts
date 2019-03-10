import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/*http://localhost:4200/lazy/studentoverview*/



@Injectable({
  providedIn: 'root'
})


export class StudentSystemServiceService  implements OnInit {


	public loggedInUsera = {};
	public loggedIn;
	public newStudent = {};
	public studentsPeristant = [];
	public users = [];

	//public usersa = [];

  constructor(private http: HttpClient) {
		
					this.http.get('./assets/authUsers.json').subscribe(
				  data => {
									var i;
									for (i = 0; i < data.length; i++) {
											this.users.push(data[i]);
									}
							
				  },
				  (err: HttpErrorResponse) => {
				    console.log(err.message);
				  }
				);

	}/*	end of constructor */



	OnInit() { } /* end of onInit */ 


	/*

 public users = [
												{"email": "tester@gmail", "password": "password123"},
				                {"email": "	testerA@gmail", "password": "password12345"},
												{"email": "testerB@gmail", "password": "password123456"}
	];
*/

	 

	public newStudent = {};

	



	tokenExipre(){
		localStorage.setItem('token', null);
		window.location = "/login";
	}/* end of tokenExipre function */



	tokenExipreTime(exipreTime){
			var that = this;
		  setTimeout(function(){
		confirm('tokenExipreTime');
              that.tokenExipre();
       }, exipreTime);
	
	

	}/* end of tokenExipreTime function */



	studentsRetrieve(){


			this.http.get('./assets/students.json').subscribe(
      data => {
       // this.studentsFetchs = data as string [];	 // FILL THE ARRAY WITH DATA.
					// console.log(data);
							var i;
							for (i = 0; i < data.length; i++) {
								this.studentsPeristant.push(data[i]);
					//			console.log(this.studentsPeristant);
							}
							 
				 // console.log(data['2']);
					
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
	//this.studentsPeristant = this.studentsFetchs; 
	return this.studentsPeristant;


		
	} /* end of addStudentuser function */

  

	addStudentuser(Data){

				this.newStudent.first_name = Data['first_name'];
				this.newStudent.last_name = Data['last_name'];
				this.newStudent.studentCardNumber = Data['studentCardNumber'];

				this.newStudent.studentDescription = Data['studentDescription'];

				this.newStudent.subjects = Data['subjects'];

				var data = JSON.parse(JSON.stringify(this.newStudent));
				this.studentsPeristant.push(data); 
				return this.studentsPeristant;
			
		//return window.location ='/studentoverview';


	} /* end of addStudentuser function */


isAuthenticated(){
											/*	, "123456789_token"	*/
	//	console.log(localStorage.getItem("token");
	// typeof(localStorage.getItem("token")) =='undefined'
		if(true){
					if(localStorage.getItem("token") == "123456789_token" ){ return true;} else { return false;}
		} else { return false;}
		
			
	} /* end of isAuthenticated function */



	loggedInUser(){
	
			var loggedInUser = localStorage.getItem("loggedUserEmail")
			return loggedInUser;
	
	}/* end of loggedInUser function */



		/*
			onFileSelect(event){
					console.log(event);
		} end of onFileSelect function
	 */



	



		

	checkLogin(userLoginData){	
		let userData = [{ "email": userLoginData[0].email, "password": userLoginData[0].password }];	
			console.log(userData[0].email);
		console.log(this.users[0].email);

		var i;
			for (i = 0; i < this.users.length; i++) {
				
					if(this.users[i].email == userData[0].email && this.users[i].password == userData[0].password){
							localStorage.setItem("loggedUserEmail", userData[0].email);
							localStorage.setItem("token", "123456789_token");
							return window.location ='/lazy/studentoverview';
						} else {
						//	return false;
							//this.check = false;
						}



			} /*	end for loop	*/





		//this.check = this._StudentSystemServiceService.checkLogin(userData);
		
	} /* end of checkLogin function */




	studentDeleteService(studentDelete){

//confirm('studentDelete - service');
		this.studentsPeristant = this.studentsPeristant.filter(function(value) { 		
				console.log(value);
			
					return value !== studentDelete;
		});
		
	return this.studentsPeristant;
	}/* end of studentDeleteService function */






	}
