import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {AuthService} from "../../core/service/auth.service";
import {Card} from "../../shared/model/card";
import {CardService} from "../../shared/service/card.service";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  cardList: Card[] = []

  constructor(private cardService: CardService,
              private snackBar: MatSnackBar,
              public authService: AuthService) {
  }

  ngOnInit(): void {
    this.reload()
  }

  reload() {
    this.cardService.getListCard().then(result => {
      this.cardList = result
    })
  }
  isLoggedIn() {
    var loggedIn = this.authService.isLoggedIn;
    console.log(loggedIn)
    return loggedIn
  }

  deleteCard(id: string) {
    this.cardService.deleteCard(id).then(result => {
      console.log(result)
      this.snackBar.open('Delete card successfully.', '', {duration: 5000})
      this.reload()
    })
  }
}
