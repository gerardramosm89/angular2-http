import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class UserService {

	constructor (private http: Http){
	}
	//grab all users
	getUsers(): Observable<any> {
	 return this.http.get('https://reqres.in/api/users')
		  .map(res => res.json().data)
			.catch(err => {
				return Observable.throw(err.json().data || 'Server error.');
			});
	}
	//get a single user

	//create a user

	//update a user

	//delete a user
}
