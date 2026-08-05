import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string; //= "u1";

  get selectedUser() {
    let tempPerson = {
      id: "0",
      name: 'Click a person',
      avatar: 'user-1.jpg',
    };
    return (
      this.users.find((user) => user.id === this.selectedUserId) ?? tempPerson
    );
  }
  onSelectUser(id: string) {
    console.log('Selected user with id' + id);
    this.selectedUserId = id;
  }
}
