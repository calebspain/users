import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [];

  constructor() { }

  ngOnInit() {
  }

  getUsers = async () => {
    const response = await fetch('https://uinames.com/api/?amount=25');
    const users = await response.json();
    for (let user of users) {
      this.users.push(user);
    }
  }

  sortUsers() {
    this.users.sort((a, b) => {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }
}
