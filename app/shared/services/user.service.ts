import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';

@Injectable()

export class UserService {
	usersUrl: string = 'https://reqres.in/api/users';
	constructor (private http: Http){
	}
	//grab all users
	getUsers(): Observable<User[]> {
	 return this.http.get(`${this.usersUrl}`)
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
