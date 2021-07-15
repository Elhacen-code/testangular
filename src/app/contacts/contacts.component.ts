import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contact={name:"med",email:"med@gmail.com"};
  constructor() { }

  ngOnInit(): void {
  }

}
