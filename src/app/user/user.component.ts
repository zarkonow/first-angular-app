import { Component, computed, EventEmitter, Input, input, output, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';



type User = {
  id: string;
  name: string;
  avatar: string;
}



const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  @Input({ required: true }) user!: User;

  @Output() select = new EventEmitter();
  //select = output<string>()


  // avatar = input.required<string>()
  // name = input.required<string>()

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar;
  // })

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id)
  }

}
