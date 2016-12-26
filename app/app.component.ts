import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { User } from './shared/models/user';
@Component({
  selector: 'my-app',
  styles: [`
    
  `],
  template: `
    <div class="jumbotron text-center">
      <h1>Gerry's HTTP Practice</h1>
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
	constructor(private http: Http){
	
	}

	ngOnInit(){
		//grab users
		this.http.get('https://reqres.in/api/users')
		.subscribe(data => {
			console.log(data.json());
			this.users = data.json().data;
		});
	}
}
