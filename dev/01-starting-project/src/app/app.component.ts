import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './tasks/task/task.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  user = DUMMY_USERS;
  selectedUserId?: string; //= "u1";

  get selectedUser() {
    let tempPerson = {
      id: 0,
      name: 'Click a person to continue',
      avatar: 'user-1.jpg',
    };
    return (
      this.user.find((user) => user.id === this.selectedUserId) ?? tempPerson
    );
  }
  onSelectUser(id: string) {
    console.log('Selected user with id' + id);
    this.selectedUserId = id;
  }
}
