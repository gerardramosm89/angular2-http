import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { UserService } from './shared/services/user.service';
import { UsersComponent } from './users/users.component';
import { routing } from './app.routing';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserSingleComponent } from './users/user-single/user-single.component';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
@NgModule({
  imports: [ 
		BrowserModule,
		HttpModule,
		FormsModule,
		routing
	],
  declarations: [ 
		AppComponent,
		UsersComponent,
		UserListComponent,
		UserSingleComponent
	],
	providers: [
		UserService	
	],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
