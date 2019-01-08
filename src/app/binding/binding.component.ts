import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.less']
})
export class BindingComponent implements OnInit {
	bindingArray:string[] = ["binding 1","binding 2","binding 3"]
	fruit:string[]= ["bannana","jackfruit","fig"];

  constructor() { }

  ngOnInit() {
  }

}
