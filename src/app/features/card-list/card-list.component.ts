import { Component, OnInit } from '@angular/core';
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
              public authService: AuthService) { }

  ngOnInit(): void {
    this.cardService.getListCard().then(result => {
      this.cardList = result
    })
  }

  isLoggedIn() {
    var loggedIn = this.authService.isLoggedIn;
    console.log(loggedIn)
    return loggedIn
  }

}
