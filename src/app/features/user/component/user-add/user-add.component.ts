import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";
import {faFacebook, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {User} from "../../../../shared/model/user.model";
import {UserService} from "../../../../shared/service/user.service";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  fbIcon = faFacebook
  twIcon = faTwitter
  constructor(
    private snackBar: MatSnackBar,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const routeParams = this.route.snapshot.paramMap;
  }


  ngOnInit(): void {

  }
}
