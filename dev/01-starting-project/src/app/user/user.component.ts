import { Component, Input, input, Output, EventEmitter, output} from '@angular/core';

import { type User } from './user.model'
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Output() select = new EventEmitter<string>();
  @Input({required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  get imagePath() {
    return 'assets/user/' + this.user.avatar;
  }
  onSelectedUser() {
    // console.log('clicked this person with ')
    this.select.emit(this.user.id);
  }
}
