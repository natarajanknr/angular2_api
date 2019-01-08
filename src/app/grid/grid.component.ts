import { Component, OnInit } from '@angular/core';
import {BasicServices} from '../Services/basic.services';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.less']
})

export class GridComponent implements OnInit {

  public employee:[];
  public errorMsg;
  public gridErrorMsg;
  public singlePost;

  constructor(private apiServices:BasicServices) {
  	this.apiServices.GetPosts().subscribe( 
      data => this.employee = data,
      error => this.gridErrorMsg = error
    );
  }

  getPostId(postId:any[]) {
  		/*this.apiServices.GetPostsAsperId(postId).subscribe( 
        data => console.log(data),
        error => console.log(error)
      );
      */
  		this.apiServices.GetPostsAsperId(postId).
      subscribe( 
        data => this.singlePost = data,
        error => this.errorMsg = error
      );
  }

  ngOnInit() {}
}
