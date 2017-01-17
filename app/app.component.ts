import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { User } from './shared/models/user';
import { UserService } from './shared/services/user.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'my-app',
  styles: [`
    
  `],
  template: `
    <div class="jumbotron text-center">
      <h1>Http</h1>
    </div>
		<div *ngIf="users">
			<div *ngFor="let user of users">
				<h2>{{ user.first_name }}</h2>
			</div>
		</div>
	`
})
export class AppComponent implements OnInit{
	users: User[];
	constructor(private http: Http, private userService: UserService){
	
	}

	ngOnInit(){
		//grab users

		this.userService.getUsers()
		.subscribe(users => {
			console.log(users);
			this.users = users;
		});
		console.log(this.users);
/*
		this.http.get('https://reqres.in/api/users')
		.toPromise()
		.then(response => {
		console.log('response from promise is: ', response);
		this.users = response.json().data;
		});
*/
	}
}
