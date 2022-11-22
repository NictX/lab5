import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-registrations',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    // const user = new User('a@gmail.com', '123', 'a');
    // this.usersService.createUser(user).subscribe();

  }

}
