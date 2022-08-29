import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name:string = '';
  constructor() { 
    let User = localStorage.getItem('user');
    if(User){
      this.name = JSON.parse(User).firstName;
    }
  }

  ngOnInit(): void {
  }

}
