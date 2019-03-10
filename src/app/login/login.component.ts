import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { StudentSystemServiceService } from './../student-system-service.service';


import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})




export class LoginComponent implements OnInit {





	public check = true;
	
	/*public users = [
												{"email": "tester@gmail", "password": "password123"},
				                {"email": "testerA@gmail", "password": "password12345"},
												{"email": "testerB@gmail", "password": "password123456"}
	];

	*/


	public users =[];


  constructor(private _StudentSystemServiceService: StudentSystemServiceService, private httpClient: HttpClient) { 

		



	} /*	end of constructor */

	




  ngOnInit() {
	
	this.httpClient.get('./assets/authUsers.json').subscribe(
				  data => {
									var i;
									for (i = 0; i < data.length; i++) {
										this.users.push(data[i]);
									}
							
				  },
				  (err: HttpErrorResponse) => {
				    console.log (err.message);
				  }
				);


	}/* end of ngOnInit */
		

	checkLogin(userLoginData){
	let userData = [{ "email": userLoginData.email, "password": userLoginData.password }];	
		
		/*	for (var user in this.users){

				if(this.users[user].email == userLoginData.email && this.users[user].password == userLoginData.password){
							localStorage.setItem("loggedUserEmail", userLoginData.email);
							localStorage.setItem("token", "123456789_token");
							return window.location ='/lazy/studentoverview';
						} else {
							//return false;
							this.check = false;
						}
		
			}*/ /* end of for loop */


		this.check = this._StudentSystemServiceService.checkLogin(userData);
		
	} /* end of checkLogin function */


	




}
