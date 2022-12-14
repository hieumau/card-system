import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../../core/service/auth.service";
import {User} from "../../../model/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: User = new User()

  form = this.formBuilder.group({
    email: '',
    password: ''
  })

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
  }

  onLogin(): void {
    this.user.email = this.form.value.email
    this.user.password = this.form.value.password
    this.authService.login(this.user).then(result => {
      this.router.navigate(['cards'])
    })
  }

}
