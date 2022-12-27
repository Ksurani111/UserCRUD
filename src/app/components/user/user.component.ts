import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/service/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserForm } from 'src/app/interface/user-form';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})



export class UserComponent implements OnInit {
  userForm = new FormGroup<UserForm>({
    userName: new FormControl(),
    city: new FormControl(),
    dateOfBirth: new FormControl(),
  })
constructor(private userService: UserService){}
public user:User;

  createUser()
  {  
    console.log(this.userForm.value);
   this.userService.createtUsers(this.userForm.value).subscribe(res => {
     if(res == 1)
     {
      this.onGetUsers();
      this.popup = false;
      
     }
   });
  }

  

ngOnInit():void{
this.onGetUsers();
  }
userList: User[];
public popup: boolean = false;

  onGetUsers(){
this.userService.getUsers()
.subscribe((user: User[])=>{
this.userList = user,
console.log(this.userList);
});
  }
}
