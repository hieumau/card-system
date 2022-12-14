import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {AuthService} from "../../../../core/service/auth.service";
import {User} from "../../../model/user.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User = new User()
  rePass: string = ''

  constructor(private authService: AuthService,
              private router: Router,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {

  }

  register() {
    if (!this.validate()) return
    this.authService.register(this.user).then(result => {
      this.snackBar.open('Register successfully.', '', {duration: 3000})
      this.user = new User()
      this.router.navigate(['login'])
    })
  }

  private validate(): boolean {
    let result = true
    if (this.rePass != this.user.password) {
      result = false
      this.snackBar.open('Repeat password not correct!', '', {duration: 5000})
    }
    return result
  }
}
