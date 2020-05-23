import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bind-assign',
  templateUrl: './data-bind-assign.component.html',
  styleUrls: ['./data-bind-assign.component.css']
})
export class DataBindAssignComponent implements OnInit {
  username: string = '';
  isBlank: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onClear(){
    this.username = ""
    this.isBlank = true;
  }
  onInput(){
    this.isBlank = this.username.length > 0 ? false : true;
  }

}
