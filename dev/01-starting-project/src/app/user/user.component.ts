import { Component, Input, Output, EventEmitter } from '@angular/core';
import { type User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  @Output() select = new EventEmitter<string>();
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;

  get imagePath() {
    return 'assets/user/' + this.user.avatar;
  }

  onSelectedUser() {
    this.select.emit(this.user.id);
  }
}