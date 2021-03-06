import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/user.model';
import { StringManipulationService } from 'src/app/shared/services/string-manipulation.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-to-profile',
  templateUrl: './to-profile.component.html',
  styleUrls: ['./to-profile.component.css']
})
export class ToProfileComponent implements OnInit {

  constructor(private userService:UserService,public stringService:StringManipulationService) {
  }

  get user():IUser{
    let user:IUser = this.userService.getCurrentUser();
    return user;
  }

  get isAuthenticated():boolean{
    return this.userService.isAuthenticated();
  }

  ngOnInit(): void {
    
  }

  logoutHandler(){
    this.userService.logout();
  }

}
