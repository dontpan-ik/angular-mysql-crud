import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent implements OnInit {

  title : string = "Agrega Usuario";

  user: Users={
    name: "",
    last_name: "",
    email: "",
    password: "",
    rol_id:0,
    status: "ACTIVE"
  }

  edit: boolean= false;

  constructor(private usersService: UsersService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(params['user_id']){
      this.usersService.getUser(params['user_id']).subscribe(
        res=>{
          this.user=res;
          this.edit=true;
          console.log(this.user);
        },
        err=>{
          console.log(err);
        }
      )
    }
  }

  saveNewUser(): void {
    delete this.user.user_id;
    this.usersService.saveUser(this.user)
      .subscribe(
        res=>{
          this.router.navigate(['/usuarios']);
        },
        err =>{
          console.log(err);
        }
      )
  }

  updateUser():void{
    var id = this.user.user_id || 0;
    this.usersService.updateUser(this.user,id).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/usuarios']);
      },
      err=>{
        console.log(err);
      }
    )
  }

  regresar(){
    this.router.navigate(['/usuarios']);
  }

}
