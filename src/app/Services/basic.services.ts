import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class BasicServices {	
	constructor(private http: Http) {}
	GetPosts() {
		//return this.http.get('assets/data/employeeData.json')
		return this.http.get('https://jsonplaceholder.typicode.com/posts/')
		.map(result => result.json());
	}
	GetPostsAsperId(postId) {
		return this.http.get('https://jsonplaceholder.typicode.com/posts/'+ postId)
		.map(result => result.json());
	}
}
