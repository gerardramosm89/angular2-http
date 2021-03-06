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
    <div class="container">
      <div class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <a routerLink="/" class="navbar-brand">Gerry's HTTP</a>
          </div>
          <ul class="nav navbar-nav"> 
            <li><a routerLink="/users">Users</a></li>
          </ul>
        </div>
      </div>
      <router-outlet></router-outlet>
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
